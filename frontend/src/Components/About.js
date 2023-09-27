import React from 'react';
import Header from './navBar';
import Footer from './footer';
import './contactUs.css';
import Image from '../Images/image.jpeg';

function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="call">
          <h2 className='head'>OUR MISSION</h2>
          <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae animi qui sapiente iste vel explicabo soluta 
            recusandae ad doloribus, placeat fugiat omnis possimus enim officia illum maxime blanditiis incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae animi qui sapiente iste vel explicabo soluta 
            recusandae ad doloribus, placeat fugiat omnis possimus enim officia illum maxime blanditiis incidunt?</p>
        </div>
        <div className="custom">
          <img src={Image} alt="building" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;