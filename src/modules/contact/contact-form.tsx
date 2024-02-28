import React, { useState, useRef } from 'react';
import { styled } from 'stitches.config';
import { Amplify, API } from 'aws-amplify';
import awsmobile from '../../../src/aws-exports'
import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from './re-captcha-actions';

Amplify.configure({...awsmobile, ssr: true});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false); // State to show/hide reCAPTCHA
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    try {
      await verifyCaptcha(token);
      await sendEmail(); // If verification succeeds, send email
    } catch (error) {
      console.error('Error verifying captcha:', error);
    }
  }

  const sendEmail = async () => {
    try {
      const apiName = 'BlackHoleContactForm';
      const path = '/items';
      const myInit = {
        body: formData,
        headers: {},
      };
      const response = await API.post(apiName, path, myInit);
      console.log('Response from Lambda:', response);
      setIsSubmitted(true); // Update submission state on successful response
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowCaptcha(true); // Show reCAPTCHA when submitting
  };

  if (isSubmitted) {
    return <SuccessMessage>Thank you for your message! We will be in touch soon.</SuccessMessage>;
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {!showCaptcha && (
          <>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            />
            <Button type="submit">
              Submit
            </Button>
          </>
        )}
      </Form>
      {showCaptcha && (
        <CustomReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
          onChange={handleCaptchaSubmission}
        />
      )}
    </>
  );
};

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '325px',
  margin: 'auto',
});

const Input = styled('input', {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: '$cyan8',
  
  '::placeholder': {
    color: 'red',
    fontFamily: 'inherit'
  },
});

const CustomReCAPTCHA = styled(ReCAPTCHA, {
  width: '100px',
});

const TextArea = styled('textarea', {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minHeight: '100px',
  backgroundColor: '$cyan8',
  resize: 'none'
});

const Button = styled('button', {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '$cyan8',
  color: 'white',
  cursor: 'pointer',
  '&:hover': {
    background: '$cyan4',
  },
});

const SuccessMessage = styled('div', {
  // padding: '2rem',
  // margin: '2rem 0',
  width: "304px",
  height: "74px",
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  backgroundColor: '$cyan8',
  color: 'rgba(255,255,255,1)',
  borderRadius: '0.25rem',
  border: '1px solid #C3E6CB'
});

export default ContactForm;
