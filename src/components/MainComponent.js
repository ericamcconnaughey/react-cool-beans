import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Catering from './CateringComponent';
import About from './AboutComponent';
import Meeting from './MeetingRoomComponent';
import Kids from './KidsComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import data from '../shared/filename';

const mapStateToProps = state => {
  return {};
}


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/menu' component={Menu} />
          <Route path='/catering' component={Catering} />
          <Route path='/aboutus' component={About} />
          <Route path='/meetingroom' component={Meeting} />
          <Route path='/kids' component={Kids} />
          <Route path='/contact' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Main));