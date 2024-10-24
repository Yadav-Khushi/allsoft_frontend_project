export const uploadFile = async (formData) => {
  const token = localStorage.getItem('token'); // Retrieve token from local storage
  console.log('Token:', token); // Check if token is retrieved

  if (!token) {
    throw new Error('No token found, user might not be authenticated');
  }

  const response = await fetch('https://apis.allsoft.co/api/documentManagement/saveDocumentEntry', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`, // Use Bearer token if the API expects this format
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  return response.json(); // Return response data
};

  
  
  