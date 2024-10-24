import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadFile } from '../services/fileService';  

function FileUploadPage() {
    const [category, setCategory] = useState('Personal');
    const [subCategory, setSubCategory] = useState([]);
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [date, setDate] = useState('');
    const [remarks, setRemarks] = useState('');
    const [file, setFile] = useState(null);
    
    const navigate = useNavigate();
  
    const handleCategoryChange = (e) => {
      const selectedCategory = e.target.value;
      setCategory(selectedCategory);
      if (selectedCategory === 'Personal') {
        setSubCategory(['John', 'Tom', 'Emily']);
      } else {
        setSubCategory(['Accounts', 'HR', 'IT']);
      }
    };
  
    const handleTagInputChange = (e) => {
      setTagInput(e.target.value);
    };
  
    const handleTagAdd = (e) => {
      if (e.key === 'Enter' && tagInput.trim()) {
        if (!tags.includes(tagInput)) {
          setTags([...tags, tagInput]);
        }
        setTagInput('');
      }
    };
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const fileType = selectedFile.type;
        if (fileType.startsWith('image/') || fileType === 'application/pdf') {
          setFile(selectedFile);
        } else {
          alert('Please upload only image or PDF files.');
        }
      }
    };
  
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append("file", file);
      
      // Prepare the data object
      const dataPayload = {
        major_head: category,
        minor_head: subCategory[0],  
        document_date: date,
        document_remarks: remarks,
        tags: tags.map(tag => ({ tag_name: tag })),
      };
  
      formData.append("data", JSON.stringify(dataPayload));
  
      try {
        const result = await uploadFile(formData);
        console.log(result); // Handle success response
      } catch (error) {
        console.error('Upload Error:', error.message); // Handle error response
        alert('Upload failed. Please try again.');
      }
    };
  
    return (
      <div style={styles.container}>
        {/* Navigation buttons */}
        <div style={styles.navigation}>
          <button style={styles.navButton} onClick={() => navigate('/search')}>
            File Search
          </button>
          <button style={styles.navButton} onClick={() => navigate('/preview')}>
            Preview and Download
          </button>
        </div>
  
        <h2 style={styles.heading}>File Upload</h2>
  
        {/* Date Picker */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
        </div>
  
        {/* Category Dropdown */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Category:</label>
          <select
            onChange={handleCategoryChange}
            value={category}
            style={styles.input}
          >
            <option value="Personal">Personal</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
  
        {/* Sub-Category Dropdown */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Sub-Category:</label>
          <select style={styles.input}>
            {subCategory.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
  
        {/* Tag Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Tags:</label>
          <input
            type="text"
            placeholder="Enter tags and press Enter"
            value={tagInput}
            onChange={handleTagInputChange}
            onKeyDown={handleTagAdd}
            style={styles.input}
          />
          <div style={styles.tagContainer}>
            {tags.map((tag, idx) => (
              <span key={idx} style={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
  
        {/* Remarks Field */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Remarks:</label>
          <input
            type="text"
            placeholder="Enter remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            style={styles.input}
          />
        </div>
  
        {/* File Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Upload File (Image or PDF):</label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            style={styles.input}
          />
        </div>
  
        <button style={styles.uploadButton} onClick={handleUpload}>
          Upload
        </button>
      </div>
    );
  }

const styles = {
  container: {
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f0f8ff',
    color: '#1e3a8a',
    border: '1px solid #1e3a8a',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  navButton: {
    padding: '10px 20px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  heading: {
    textAlign: 'center',
    color: '#1e3a8a',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#1e3a8a',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #1e3a8a',
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#1e3a8a',
  },
  tagContainer: {
    marginTop: '10px',
  },
  tag: {
    display: 'inline-block',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    padding: '5px 10px',
    margin: '5px 5px 0 0',
    borderRadius: '20px',
    fontSize: '14px',
  },
  uploadButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default FileUploadPage;
