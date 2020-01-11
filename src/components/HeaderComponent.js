import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron className="header">
          <div className="container header">
            <div className="row">
              <div className="col-3 align-self-center">
                <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" className="img-fluid" height="30" width="30" alt="Cool Beans Logo" /></NavbarBrand>
              </div>
                <Navbar dark sticky="top" expand="md">
                  <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav navbar>
                        <NavItem>
                          <NavLink className="nav-link" to="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="nav-link" to="/menu">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="nav-link" to="/catering">Catering</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="nav-link" to="/aboutus">About</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="nav-link" to="/meetingroom">Meeting Room</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="nav-link" to="/kids">For Kids</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </div>
                </Navbar>
              </div>
            </div>
          
        </Jumbotron>
        
      </React.Fragment>
    );
  }
}

export default Header;