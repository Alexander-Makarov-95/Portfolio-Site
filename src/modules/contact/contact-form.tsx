import React, { useState } from 'react';
import { styled } from 'stitches.config';
import { Amplify, API } from 'aws-amplify';
import awsmobile from '../../../src/aws-exports'

Amplify.configure({...awsmobile, ssr: true});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiName = 'BlackHoleContactForm'; // replace with your API name
      const path = '/items'; // replace with the path you configured in your API
      const myInit = {
        body: formData, // body of your POST request
        headers: {}, // optionally, add additional headers
      };

      const response = await API.post(apiName, path, myInit);
      console.log('Response from Lambda:', response);
      setIsSubmitted(true); // Update submission state on successful response
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isSubmitted) {
    return <SuccessMessage>Thank you for your message! We will be in touch soon.</SuccessMessage>;
  }


  return (
    <Form onSubmit={handleSubmit}>
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
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const Form = styled('form', {
  // Form styling here
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '325px',
  margin: 'auto',
});

const Input = styled('input', {
  // Input field styling
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: '$cyan8',
  
   '::placeholder': {
    color: 'red', // Change placeholder text color here
    fontFamily: 'inherit'
  },
});

const TextArea = styled('textarea', {
  // Textarea styling
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minHeight: '100px',
  backgroundColor: '$cyan8',
  resize: 'none'
});

const Button = styled('button', {
  // Button styling
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
  padding: '2rem',
  margin: '2rem 0',
  textAlign: 'center',
  backgroundColor: '$cyan8',
  color: 'rgba(255,255,255,1)',
  borderRadius: '0.25rem',
  border: '1px solid #C3E6CB'
});


export default ContactForm;
