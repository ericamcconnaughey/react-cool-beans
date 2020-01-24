import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class About extends Component {

render () {
  return (
    <div className="container">
        <div className="page-header">
          <h1>About Us</h1>
        </div>
        <div className="about-us pt-4">
          <div className="box">
            <h3>Comfort and Contemporary Style at Cool Beans</h3>
            <Row className="box">
              <Col className="my-auto col-md-8">
                <p>Come on in, grab a hot
                  latte, sit back and relax. Cool Beans Coffee Cafe is waiting to serve you.
                  Located on the East side of Madison, WI, you will enjoy a variety of drinks
                  and food within a warm, contemporary atmosphere. Cool Beans strives for excellence
                  in food, drink, atmosphere and service.</p>
              </Col>
              <Col className="media col-md-4">
                <img src="assets/images/lisa.jpg" className="img-fluid mx-auto mb-3 max-width: 50%; height: auto; rounded"
                  alt="Lisa, founder of Cool Beans coffee cafe" />
              </Col>
            </Row>
            <Row className="box">
              <Col className="my-auto col-lg-6 order-lg-2">
                <p>The Cool Beans experience was designed with quality, comfort, and style built in. The interior design was
                  created to evoke the ambiance of a trendy coffeehouse that blends comfort with contemporary style.
                  The colors and style that surround you are relaxing and the natural light coming in their giant
                  windows accentuate the wood floors and ceramic details. The fireplace keeps you warm and the
                  velvety chairs ease tired bones.</p>
              </Col>
              <Col className="media about-style col-lg-6 order-lg-1">
                <img src="assets/images/indoorshot3.png" className="img-fluid m-auto mb-3 max-width: 50%; height: auto; rounded"
                  alt="indoor shot of chairs around the fireplace" />
              </Col>
            </Row>
            <div className="box">
              <h3>Food, Drinks, and Entertainment</h3>
              <p>Opening on July 19, 2001, Cool Beans offers a delicious, unique and decadent selection of sandwiches, and
                dessert items. There are several great reviews on Cool Beans' salads and wraps.</p>

              <p>Their menu also changes from time to time. New food items are always in the works and will keep you coming
                back
                to see what else is new.</p>
              <Row className="box">
                <Col className="col-md-4">
                  <div className="about-coffee media">
                    <img src="assets/images/true-coffee.jpg" className="img-fluid mx-auto mb-3 max-width: 50%; height: auto; rounded"
                      alt="True Coffee Roasters logo -- est. 2008 in Wisconsin" />
                  </div>
                </Col>
                <Col className="col-md-8">
                  <div className="my-auto">
                    <p>If you like True Coffee Roasters, Cool Beans serves it up fresh and hot. If you have never had True
                      Coffee
                      Roasters coffee, it will become your favorite. Their smoothies are all natural and iced drinks are
                      great on
                      days
                      when you just need to cool off.</p>

                    <p>Stop over to Cool Beans for an after-dinner or post-movie dessert and coffee. It's an alternative
                      place to
                      meet
                      if you don't want to take up a table at a busy restaurant.</p>
                  </div>
                </Col>
              </Row>
              <div className="box">
                <h3>Meeting Room</h3>
                <p>Cool Beans offers a meeting room that is perfect for real estate agents, sales representatives, and
                  other
                  professionals that need a place to meet. This room is normally open for Cool Beans' patrons, but can
                  be
                  reserved
                  and closed off for private meetings as well. Why not meet in a relaxing place outside the office?</p>
                <Col className="col offset-4 offset-md-5">
                  <button role="link" className="btn"><Link to="/meetingroom" className="buttontext">More Info</Link></button>
                </Col>
                <Row className="box mt-5">
                  <Col className="col-lg-6">
                    <div className="my-auto">
                      <h3>Location</h3>
                      <p>You will find Cool Beans conveniently located near East Towne Mall, by the Princeton Club (which is
                        also
                        the
                        name of a delicious turkey, avocado, and sprout sandwich you can order).</p>
                    </div>
                  </Col>
                  <Col className="col-lg-6">
                    <div className="about-location media">
                      <img src="assets/images/outdoorshot2.png" className="img-fluid mb-3 mx-auto max-width: 60%; height: auto; rounded"
                        alt="a view of Cool Beans coffee cafe from the parking lot" />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

  export default About;