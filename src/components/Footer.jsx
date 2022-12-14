import { Link } from 'react-router-dom';
import Logo from '../images/Logo.jpg';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="" />
                </Link>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ducimus nemo nulla id explicabo pariatur quam error et aperiam dolor?
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><BsLinkedin /></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebookF /></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><BsTwitter /></a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><BsInstagram /></a>

                </div>
            </article>
            <article>
                <h4>Permallinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>

            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQs</Link>

            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/s'>Support</Link>

            </article>
        </div>
        <div className="footer__copyright"><small>2022 start website</small></div>
    </footer>
  )
}

export default Footer