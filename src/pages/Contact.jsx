import React from 'react'
import { Container } from "react-bootstrap";
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact