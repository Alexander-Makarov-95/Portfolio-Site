import axios from 'axios';

export default async function handler(req, res) {
  const { token } = req.body;
  console.log('Received token:', token);

  // Check if the RECAPTCHA_SECRET_KEY is set without logging it
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.error('RECAPTCHA_SECRET_KEY is not set.');
    res.status(500).json({ error: 'RECAPTCHA_SECRET_KEY is not set' });
    return;
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    );
    console.log('Verification request to Google reCAPTCHA API successful.');
    // Log the response data except the secret key
    console.log('Google API response:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error during reCAPTCHA verification:', error);
    res.status(500).json({ error: 'Failed to verify reCAPTCHA token' });
  }
}
