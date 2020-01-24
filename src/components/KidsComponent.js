import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class Kids extends Component {
render () {
  return (
    <div className="container">
      <div className="page-header">
        <h1>For Kids</h1>
      </div>
      <Row className="for-kids pt-4">
        <Col className="card col-12 col-lg-10 mx-auto px-0">
          <CardHeader>
            <h3>Kids Menu</h3>
          </CardHeader>
          <CardBody>
            <p>Served on white bread with Goldfish crackers and a juice box.</p>
            <h5>Grilled Cheese Sandwich</h5>
            <p>$3.49 -- grilled with American cheese</p>
            <br />
            <h5>PB + J Sandwich</h5>
            <p>$3.49 -- with your choice of strawberry or grape jelly</p>
            <br />
            <p><small>Menu and prices subject to change.</small></p>
            <br />
            <Col className="offset-4 offset-md-5">
              <button className="btn" role="link" id="full-menu"><Link to="/menu" className="buttontext">Full Menu</Link></button>
            </Col>
          </CardBody>
        </Col>

        <Card className="col-12 col-lg-10 mx-auto px-0">
          <CardHeader>
            <h3>Children's Area</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col className="my-auto col-md-6 col-lg-8">
                <p>Cool Beans Coffee Café is a great place to relax AND bring the kids, too. In our children’s seating and
                  play area inside, and sandbox outside, there is plenty to keep them busy while you enjoy our coffee and
                  food.</p>
              </Col>
              <Col className="media col-md-6 col-lg-4">
                <img src="assets/images/kidsarea.png" className="img-fluid mx-auto mb-3 width: 50%; height: auto; rounded"
                  alt="children's play area inside the cafe" />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Row>
    </div>
  )
}
}

export default Kids;