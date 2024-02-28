import axios from 'axios';

export async function verifyCaptcha(token) {
  try {
    const response = await axios.post('/api/verify-captcha', { token });
    
    if (response.data.success) {
      return "success!";
    } else {
      throw new Error("Failed Captcha");
    }
  } catch (error) {
    throw new Error("Failed to verify Captcha");
  }
}
