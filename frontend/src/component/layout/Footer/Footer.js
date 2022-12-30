import React from "react";
import "./Footer.css";
import {GrInstallOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <button><GrInstallOption className="icon"/>Install</button>
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>

        <p>Copyrights 2022 &copy; ManasTelavane</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/mandytelavane999">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
