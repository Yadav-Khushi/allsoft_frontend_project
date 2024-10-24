import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    

    // Show success message using SweetAlert2
    Swal.fire({
      title: 'Signup successful!',
      text: 'Please login to continue.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Redirect to login page after successful signup
      navigate('/');
    });
  };

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#e6f7ff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center', // Center align text
    },
    gif: {
      width: '100%',
      maxWidth: '300px', // Adjust max width for the GIF
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      maxWidth: '400px',
      padding: '10px',
      margin: '5px ',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',  
    },
    button: {
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontSize: '16px',  
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    heading: {
      marginBottom: '20px',
      color: '#003366',
      fontSize: '24px',  
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Signup</h2>
      <img src={require('../image/signup.gif')} alt="Signup" style={styles.gif} />  
      
      <form onSubmit={handleSignup} style={{ width: '100%' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          style={styles.input}
          required
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{' '}
        <a href="/" style={styles.link} onMouseOver={(e) => (e.currentTarget.style.textDecoration = styles.linkHover.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}>
          Login here
        </a>
      </p>
    </div>
  );
}

export default SignupPage;
