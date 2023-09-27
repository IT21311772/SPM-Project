import React from 'react';
import Header from './navBar';
import Footer from './footer';
import './contactUs.css';



function Contact() {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="call">
          <h2 className='header'>Talk to Us</h2>
          <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae animi qui sapiente iste vel explicabo soluta 
            recusandae ad doloribus, placeat fugiat omnis possimus enim officia illum maxime blanditiis incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae animi qui sapiente iste vel explicabo soluta 
            recusandae ad doloribus, placeat fugiat omnis possimus enim officia illum maxime blanditiis incidunt?</p>
          <h3 className='sub'>+94 76 1111111</h3>
        </div>
        <div className="custom">
          <h2 className='header'>Customer Support</h2>
          <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae animi qui sapiente iste vel explicabo soluta 
            recusandae ad doloribus, placeat fugiat omnis possimus enim officia illum maxime blanditiis incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae animi qui sapiente iste vel explicabo soluta 
            recusandae ad doloribus, placeat fugiat omnis possimus enim officia illum maxime blanditiis incidunt?</p>
          <h3 className='sub'>+94 76 1111111</h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;