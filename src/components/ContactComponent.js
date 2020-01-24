import React, { Component } from 'react';
import { Row, Col, Label, Button } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNum: '',
      email: '',
      agree: false,
      feedback: '',
      touched: {
        name: false,
        phoneNum: false,
        email: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }
  render () {

    return (
      <div className="container contact-us pt-4">
        <div className="page-header"> 
          <h1>Contact Us</h1>
        </div>

        <div className="container">
          <Row className="row-content align-items-center">
            <Col className="col-sm-6 box">
              <h5>Our Address</h5>
              <address>
                1748 Eagan Rd.<br />
                Madison, WI 53704<br />
                U.S.A.
              </address>
            </Col>
            <Col className="box">
              <a role="button" className="btn" href="tel:+16082448414"><i className="fa fa-phone" /> 1-608-244-8414
              </a><br />
              <a role="button" className="btn" href="mailto:coolbeans@tds.net"> <i className="fa fa-envelope-o" />
                coolbeans@tds.net</a>
            </Col>
          </Row>
        </div>
      
          <Row className="row-content box">
            <Col className="col-12">
              <h2>Send us your Feedback</h2>
              <hr />
            </Col>
            <Col md={10}>
              <Form model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="name" md={2} className="col-form-label">Name</Label>
                  <Col md={10}>
                    <Control.text model="name" id="name" name="name" 
                      placeholder="Name" 
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(2),
                        maxLength: maxLength(30)
                      }}
                     />
                     <Errors 
                        className="text-danger"
                        model=".name"
                        show="touched"
                        component="div"
                        messages={{
                          required: 'Required',
                          minLength: 'Must be at least 2 characters',
                          maxLength: 'Must be 30 characters or fewer'
                        }}
                      />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="phoneNum" md={2} className="col-form-label">Phone</Label>
                  <Col md={10}>
                    <Control.text model="phoneNum" id="phoneNum" name="phoneNum" 
                        placeholder="Phone number"
                        className="form-control"
                          validators={{
                            required,
                            minLength: minLength(10),
                            maxLength: maxLength(10),
                            isNumber
                          }}
                     />
                     <Errors 
                        className="text-danger"
                        model=".phoneNum"
                        show="touched"
                        component="div"
                        messages={{
                          required: 'Required',
                          minLength: 'Please enter a valid phone number',
                          maxLength: 'Must be 10 numbers',
                          isNumber: 'Please only enter numbers'
                        }}
                     />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="email" md={2} className="col-form-label">Email</Label>
                  <Col md={10}>
                    <Control.text model="email" id="email" name="email" 
                        placeholder="Email" 
                        className="form-control"
                          validators={{
                            required,
                            validEmail
                          }}
                     />
                     <Errors 
                        className="text-danger"
                        model=".email"
                        show="touched"
                        component="div"
                        messages={{
                          required: 'Required',
                          validEmail: 'Please enter a valid email address',
                        }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{size: 3, offset: 2}}>
                    May we contact you?
                  </Col>
                  <Col md={3}>
                    <div className="form-check form-check-inline">
                      <Label htmlFor="contactYes" className="form-check-label">
                        <Control.radio
                          className="form-check-input"
                          id="contactYes" 
                          name="contactRadios" 
                          value="yes"
                          model=".yes"
                        /> {' '}
                        Yes</Label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Label htmlFor="contactNo" className="form-check-label">
                        <Control.radio 
                            className="form-check-input" 
                            id="contactNo" 
                            name="contactRadios" 
                            value="no" 
                            model=".no"
                        /> {' '}
                        No</Label>
                    </div>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="feedback" md={2} className="col-form-label">Comments</Label>
                  <Col md={10}>
                    <Control.textarea model="feedback" className="form-control" id="feedback" name="feedback" rows="8" />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" value="submit" className="btn form-btn">Send Feedback</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
      
        </div>
    )
  }
}

export default Contact;