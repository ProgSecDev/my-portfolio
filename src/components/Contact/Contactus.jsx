import React from 'react'
import { useState } from 'react';
import './Contactus.css';
import Swal from 'sweetalert2';

const Contactus = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2fb56a67-7387-4bb5-b792-6ce319c5e68c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section className='contact'>
        <form onSubmit={onSubmit}>
        <h2>Let's Discuss Your Next Project!</h2>
        <div className='input-box'>
            <label>Full Name</label>
            <input type='text' className='field' placeholder='Enter your name' name='name' required />
        </div>
        <div className='input-box'>
            <label>Email Address</label>
            <input type='email' className='field' placeholder='Enter your email' name='email' required />
        </div>
        <div className='input-box'>
            <label>Your Message</label>
            <textarea name="message" className='field mess' placeholder='Enter your message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
        <span>{result}</span>
        </form>
    </section>
  )
}

export default Contactus
