import axios from 'axios';

export async function verifyCaptcha(token: string): Promise<string> {
  try {
    const response = await axios.post('/api/verify-captcha', { token });
    
    if (response.data.success) {
      return "success!";
    } else {
      console.error(response.data);
      throw new Error("Failed Captcha");
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error('Error', error.message);
      }
    } else if (error instanceof Error) {
      // This is a generic error
      console.error('Error', error.message);
    } else {
      // The error is of an unknown type
      console.error('An unknown error occurred');
    }

    throw new Error("Failed to verify Captcha");
  }
}
