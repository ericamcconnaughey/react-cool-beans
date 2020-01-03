import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends React.Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Cool Beans</NavbarBrand>
              </div>
              </Navbar>
          </div>
      );
  }
}

export default App;
