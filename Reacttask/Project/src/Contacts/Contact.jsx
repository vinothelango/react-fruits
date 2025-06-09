import React from 'react'
import './Contact.css'
import insta from '../assets/images/icon-instagram.svg';
import fbook from '../assets/images/icon-facebook.svg';
import twiet from '../assets/images/icon-twitter.svg';
import pins from '../assets/images/icon-pinterest.svg';

const Contact = () => {
  return (
    <div className='bodys'>
        <div className='bots'>
            <h1>sunnyside</h1>
            <ul>
                <li>About</li>
                <li>Service</li>
                <li>Products</li>
            </ul>
            <div className='images'>
                <img src={insta} alt="" />
                <img src={fbook} alt="" />
                <img src={twiet} alt="" />
                <img src={pins} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact