import logo from '../logo.svg';
import react from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faSnapchatGhost, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
   
    
      <Navbar className="nav-bar" collapseOnSelect expand="lg" variant="dark">
      <img className="logo" src="Thunderstrike_logo.jpeg"/>
      <div class="row">
                <div className="col item social"><a href="https://www.facebook.com/profile.php?id=100070870130743"><FontAwesomeIcon className="social-icon" color='white' size="2x" icon={faFacebookF} /></a> <a href="https://instagram.com/thunderstrike.canada?utm_medium=copy_link"><FontAwesomeIcon  className="social-icon" color='white' size="2x" icon={faInstagram} /></a></div>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
            
          </Nav>

        </Navbar.Collapse>
      </Navbar>
   
    
    </>
  );
}

export default Navigation;
