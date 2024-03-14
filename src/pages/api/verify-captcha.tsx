import axios from 'axios';

console.log('Environment Variables:', Object.keys(process.env));

export default async function handler(req, res) {
  const { token } = req.body;
  console.log('Received token:', token);

  // Check if the NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set and log it
  if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set.');
    res.status(500).json({ error: 'NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set' });
    return;
  } else {
    console.log('NEXT_PUBLIC_RECAPTCHA_SITE_KEY:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
  }

  // Continue with RECAPTCHA_SECRET_KEY checks and reCAPTCHA verification as before
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
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error during reCAPTCHA verification:', error);
    res.status(500).json({ error: 'Failed to verify reCAPTCHA token' });
  }
}
