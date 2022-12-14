import React from 'react';
import './Contact.css';
import Header from './../../components/Header';
import header2 from './../../images/header2.jpg';
import { MdEmail } from  'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';




const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={header2} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur architecto odio ipsum nobis sit blanditiis cumque eum, quod ad!
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://m.me/" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+917004575578" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact