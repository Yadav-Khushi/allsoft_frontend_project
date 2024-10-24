// Generate OTP
export const generateOTP = async (mobileNumber) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({ mobile_number: mobileNumber });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const response = await fetch("https://apis.allsoft.co/api/documentManagement/generateOTP", requestOptions);
  
    if (!response.ok) {
      throw new Error('Failed to send OTP');
    }
  
    return response.json();
  };
  
  // Validate OTP (Login)
  export const validateOTP = async (mobileNumber, otp) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      mobile_number: mobileNumber,
      otp: otp,
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const response = await fetch("https://apis.allsoft.co/api/documentManagement/validateOTP", requestOptions);
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return response.json();
  };
  