import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
      //  Please use your own credentials from emailjs or i will recive your email
      
    emailjs
      .sendForm(
        "service_as3k6ol",
        "template_n6xcwdz",
        form.current,
        "VOBt6Akm1LhI5CZG-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
    

    return(
        <Container style={{ paddingTop: '50px' }}>
  <Row className="justify-content-center text-center">
    <Col md={12}>
      <h1 className="white">Let's keep in Touch</h1>
      <h2 className="cyan">Contact me</h2>
    </Col>

    <Col md={12} className="c-right mt-4">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
        <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
        <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
        <span className="not-done">{notDone && "Please, fill all the input field"}</span>
        <Button type="submit" className="button" disabled={done}>Send</Button>
        <span className="done">{done && "Thanks for contacting me..."}</span>
      </form>
    </Col>
  </Row>
</Container>

    )
}

export default Contact