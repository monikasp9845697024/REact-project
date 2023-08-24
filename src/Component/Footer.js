import React from 'react'
import FooterLogo from '../Assets/Logo.svg'
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from  "react-icons/si";
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div classname="footer-wrapper">
        <div className="section-footer-one">
            <div className='footer-logo-container'>
                <img src={FooterLogo} alt='NoImage'></img>
            </div>
            <div className='footer-icons'>
                <BsTwitter/>
                <SiLinkedin/>
                <BsYoutube/>
                <FaFacebook/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Career</span>
            <span>Work</span>
            <span>Testimonial</span>

            </div>
       
            <div className='footer-section-columns'>
                <span>+91 98889-98990</span>
                <span>enquiry@food.com</span>
                <span>press@food.com</span>
                <span>help@food.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>terms and condition</span>
                <span>Privacy Policy</span>
            </div>
        </div>
        </div>

      
    
  )
}
