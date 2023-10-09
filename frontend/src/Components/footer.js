import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className="footer">
      <div className="social">
        <Link to="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="2x" color='white' />
        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="2x" color='white' />
        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="https://www.snapchat.com">
            <FontAwesomeIcon icon={faSnapchat} size="2x" color='white' />
        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="2x" color='white' />
        </Link>
      </div>
      <ul className="list">
        <li><Link to="#">Home</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Terms</Link></li>
        <li><Link to="#">Privacy & Policy</Link></li>
      </ul>
      <p className="copyright">
        The OPAL Outlook Shopping Mall @ {new Date().getFullYear()}
      </p>
    </section>
  );
}

export default Footer;
