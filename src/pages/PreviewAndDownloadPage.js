import React from 'react';

function PreviewAndDownloadPage({ files }) {
  const handleDownload = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileUrl.split('/').pop());
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  // Inline styles
  const styles = {
    container: {
      backgroundColor: 'white',
      color: '#003366', // Dark blue color for text
      padding: '20px',
      borderRadius: '5px',
      maxWidth: '600px',
      margin: 'auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
    },
    fileItem: {
      backgroundColor: '#f0f8ff', // Light blue background for file items
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '10px',
    },
    button: {
      padding: '10px',
      margin: '5px',
      backgroundColor: '#003366', // Blue background for buttons
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#00509e', // Darker blue on hover
    },
    noFilesText: {
      textAlign: 'center',
      color: '#666',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>File Preview & Download</h2>
      {files.length === 0 && <p style={styles.noFilesText}>No files available</p>}
      {files.map((file, idx) => (
        <div key={idx} style={styles.fileItem}>
          <p>{file.name}</p>
          <button
            onClick={() => handlePreview(file.url)}
            style={styles.button}
          >
            Preview
          </button>
          <button
            onClick={() => handleDownload(file.url)}
            style={styles.button}
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
}

export default PreviewAndDownloadPage;
