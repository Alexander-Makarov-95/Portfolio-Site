export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Add your email sending logic here
    // You can use services like Nodemailer, SendGrid, etc.

    try {
      // Example: Send email using a service
      await sendEmail({ name, email, message });
      res.status(200).json({ status: 'Success', message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ status: 'Error', message: 'Email sending failed' });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function sendEmail({ name, email, message }) {
  // Implement email sending logic here
  // This is just a placeholder function
}