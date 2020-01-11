import React from 'react';
import { Link } from 'react-router-dom';


//if styling doesn't work in the footer, try switching the classes for the footer with the container classes below.
function Footer(props) {
  return (
      <footer className="footer-nav">
        <div className="container container-fluid footer"> 
          <h4>Links</h4>
          <div className="row">
            <div className="col-sm-6">
              <ul className="navbar-nav nav-dark">
                <li className="nav-item active"><Link className="nav-link" to="/home"> HOME </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/menu"> MENU </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/catering"> CATERING </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about"> ABOUT </Link></li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="navbar-nav nav-dark">
                <li className="nav-item"><Link className="nav-link" to="/meetingroom"> MEETING ROOM </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/forkids"> FOR KIDS </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact"> CONTACT US </Link></li>
                <li className="nav-item"><a className="nav-link"
                    href="https://www.facebook.com/pages/category/Coffee-Shop/Cool-Beans-Coffee-Cafe-194242367329069/"><i
                      className="fa fa-facebook-square fa-lg mr-2" />FACEBOOK</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
};

export default Footer;