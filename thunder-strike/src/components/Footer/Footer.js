import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faSnapchatGhost, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFacebookF, faTwitter, faSnapchatGhost); 
const Footer = () => {
  return (
    <div class="footer-dark">
    <footer>
        <div class="container">
            <div class="row">
                <div className="col item social"><a href="https://www.facebook.com/profile.php?id=100070870130743"><FontAwesomeIcon className="social-icon" size="2x" icon={faFacebookF} /></a> <a href="https://instagram.com/thunderstrike.canada?utm_medium=copy_link"><FontAwesomeIcon  className="social-icon" size="2x" icon={faInstagram} /></a></div>
            </div>
            <p className="copyright">Thunder Strike © 2021</p>
        </div>
      
    </footer>
</div>
  );
}

export default Footer;