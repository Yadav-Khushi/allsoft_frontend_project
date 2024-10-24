import React, { useState } from 'react';

function FileSearchPage() {
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Static sample results
  const sampleResults = [
    { name: 'Document 1', id: 1 },
    { name: 'Document 2', id: 2 },
    { name: 'Document 3', id: 3 },
  ];

  const handleSearch = () => {
    console.log('Search executed with:', { category, tags, fromDate, toDate });
  };

  // Inline styles
  const styles = {
    container: {
      backgroundColor: 'white',
      color: '#003366', 
      padding: '20px',
      borderRadius: '5px',
      maxWidth: '600px',
      margin: 'auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #003366',  
      borderRadius: '4px',
    },
    button: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      backgroundColor: '#003366',  
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#00509e', 
    },
    results: {
      marginTop: '20px',
    },
    fileItem: {
      backgroundColor: '#f0f8ff', 
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Search Files</h2>
      <select onChange={(e) => setCategory(e.target.value)} value={category} style={styles.input}>
        <option value="">Select Category</option>
        <option value="Personal">Personal</option>
        <option value="Professional">Professional</option>
      </select>

      <input
        type="text"
        placeholder="Tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        style={styles.input}
      />

      <input
        type="date"
        placeholder="From Date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        style={styles.input}
      />
      <input
        type="date"
        placeholder="To Date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleSearch} style={styles.button}>Search</button>

      <div style={styles.results}>
        {sampleResults.map((file) => (
          <div key={file.id} style={styles.fileItem}>
            <p>{file.name}</p>
            <button style={styles.button}>Preview</button>
            <button style={styles.button}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileSearchPage;
