import React, { useState } from 'react';
import { generateOTP, validateOTP } from '../services/authService'; // Import functions
import documentGif from '../image/document.gif'; // Import the GIF
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Swal from 'sweetalert2'; // SweetAlert2 for notifications

function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();  

  // Handle OTP sending
  const handleSendOTP = async () => {
    try {
      await generateOTP(mobileNumber);  
      Swal.fire({
        icon: 'success',
        title: 'OTP Sent',
        text: 'OTP has been sent to your mobile number successfully!',
      });
    } catch (error) {
      console.error('Failed to send OTP:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send OTP. Please try again.',
      });
    }
  };

  
// Handle OTP validation (login)
const handleLogin = async () => {
  try {
    const response = await validateOTP(mobileNumber, otp);  
    console.log("Full response from validateOTP:", response);  

    if (response.status === false) {
      // Show error alert for invalid OTP
      Swal.fire({
        icon: 'error',
        title: 'Invalid OTP',
        text: response.message || 'Invalid OTP. Please try again.',
      });
    } else {
      // If the OTP is valid, show success alert and navigate
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in!',
      });

      // Access token from response.data.token
      const token = response.data.token;
      console.log("Token:", token);

      if (token) {
        localStorage.setItem('token', token); // Store the token on successful login
        navigate('/upload'); // Redirect to the /upload page after successful login
      } else {
        console.error('Token is undefined in the response');
      }
    }
  } catch (error) {
    console.error('Login failed:', error);
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'An error occurred during login. Please try again.',
    });
  }
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
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '400px',
      marginBottom: '10px',
    },
    input: {
      flex: 1,
      padding: '10px',
      margin: '5px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: 'calc(100% - 120px)',
    },
    sendOtpButton: {
      marginLeft: '15px',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#28a745',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    heading: {
      marginBottom: '20px',
      color: '#003366',
    },
    gif: {
      width: '250px',
      margin: '20px 0',
    },
    signupLink: {
      marginTop: '20px',
      color: '#007bff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login Here!</h2>
      <img src={documentGif} alt="Document GIF" style={styles.gif} />
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSendOTP} style={styles.sendOtpButton}>
          Send OTP
        </button>
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={styles.input}
        />
      </div>
      <button
        onClick={handleLogin}
        style={styles.button}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        Login
      </button>
      <p>
        Don't have an account? <Link to="/signup" style={styles.signupLink}>Sign up here</Link>
      </p>
    </div>
  );
}

export default LoginPage;
