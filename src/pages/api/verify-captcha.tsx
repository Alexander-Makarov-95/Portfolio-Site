
import axios from 'axios';

export default async function handler(req, res) {
  const { token } = req.body;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify reCAPTCHA token' });
  }
}