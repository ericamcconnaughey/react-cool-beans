import React, { Component } from 'react';

class Meeting extends Component {

render () {
  return (
      <div className="container">
        <div className="page-header">
          <h1>Meeting Room</h1>
        </div>
        <div className="meeting-room pt-4">
          <div className="box">
            <p>Cool Beans offers a meeting room that is perfect for small business meetings, club meetings, and small
              parties. This room is normally open for Cool Beans' patrons but can be reserved and closed off for private
              meetings as well. The meeting room seats 16-20 people. Why not meet in a relaxing place outside the office?
            </p>
            <p>For more details or to reserve the room, please give us a call at {'  '}
              <a role="button" className="btn" id="phone" href="tel:+16082448414"><i className="fa fa-phone"></i> 1-608-244-8414
              </a>
              <br />
            </p>
            <div class="picture1 box mx-auto">
              <img class="w-100" src="assets/images/indoorshot1.png" alt="interior view of the cafe leading to the meeting room doors" />
            </div>
          </div>
        </div>
    </div>
    )
  }

}

  export default Meeting;