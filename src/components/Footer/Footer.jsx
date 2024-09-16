import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="myinfo">
        <i className="bx bxl-instagram" />
          <h4>About Me</h4>
          <p>Passionate developer with a love for creating innovative <br/>solutions.Code with passion, build with creativity, and innovate with persistence.</p>
        </div>
        <div className="social-links">
          <h4>Social Links</h4>
          <ul>
            <li>
              <a className="footer-icon" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-instagram" />
                Instagram
              </a>
            </li>
            <li>
              <a  className="footer-icon" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-facebook" />
                Facebook
              </a>
            </li>
            <li>
              <a className="footer-icon" href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github" />
                GitHub
              </a>
            </li>
            <li>
              <a className="footer-icon" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-linkedin" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h4>Contact Info</h4>
          <span>9821574168 & 9328424564</span>
          <span>ramprasadc331@gmail.com</span>
          <span>Kapilvastu, Nepal</span>
        </div>
      </div>
      <div className="copy-right">
        <p style={{fontSize:'15px'}}>By using  this website you agree to the Terms and Privacy.</p>
      </div>
    </footer>
  );
};

export default Footer;