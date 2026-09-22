// src/Footer.tsx
import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li id="shoe">Shoes</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Category</h4>
          <ul id="cat">
            <li>Men</li>
            <li>New in</li>
            <li>Weekly Pick</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company Info</h4>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Payment Options</li>
            <li>Track Order</li>
            <li>Support</li>
            <li>Vouchers</li>
            <li>Size Charts</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <ul>
          <li>Data settings</li>
          <li>Cookie settings</li>
          <li>Privacy Policy</li>
          <li>Terms And Conditions</li>
          <li>Imprint</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
