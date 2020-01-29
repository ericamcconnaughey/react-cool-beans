import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render () {
      return (
        <div className="container">
          <div className="row row-content d-flex justify-content-center">
            <div className="col-12 col-lg-4">
              <div className="overview box mx-auto">
                <h2>DISCOVER</h2>
                <p>the sophisticated, yet welcoming alternative to the ever-present fast food establishments. Cool
                  Beans offers both great coffee and great food, featuring an expansive menu selection for breakfast, lunch,
                  and dinner, with carryout always available.

                  Cool Beans Coffee Cafe is the perfect place to bring clients and guests - or to take a break from your
                  shopping chores. Linger over a good book, savor exotic coffees, and enjoy the bistro cuisine. Relax in
                  upholstered chairs, amidst cherry wood floors and Scandinavian decor.</p>
              </div>
            </div>

            <div className="col-12 col-lg-4 align-self-center">
              <div className="row row-content">
                <div className="col-12">
                  <div className="catering box mx-auto">
                    <h4>We can</h4>
                    <h3>CATER</h3>
                    <h4>your next event!</h4>
                    <span className=" d-flex justify-content-center">
                      <button role="link" className="btn"><Link to="/catering" className="buttontext">Learn More</Link></button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row row-content">
                <div className="col-12">
                  <div className="picture1 box mx-auto">
                    <img src="/assets/images/salad.png" alt="salad and panini on a plate" />
                  </div>
                </div>
              </div>
              <div className="row row-content">
                <div className="col-12">
                  <div className="thank box mx-auto">
                    <br />
                    <p>We know you have<br /> a lot of choices. <br />Thank you for choosing us!</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-12 col-lg-4">
              <div className="menu box mx-auto pt-10">
                <h3>FOOD and DRINK</h3>
                <div className="row row-content">
                  <div className="col-6 col-lg-12">
                    <ul>
                      <li>Unique Breakfast Burritos</li>
                      <li>Made-To-Order Breakfast Sandwiches</li>
                      <li>Freshly Baked Pastries</li>
                      <li>Daily Quiche Specials</li>
                      <li>Bistro Sandwiches</li>
                      <li>Delicious Soups</li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-12">
                    <ul>
                      <li>Hearty Salads</li>
                      <li>Smoothies</li>
                      <li>True Coffee Roasters</li>
                      <li>Lattes and Cappuccinos</li>
                      <li>Chai Tea</li>
                      <li>Loose Leaf Teas</li>
                      <li>Healthy Menu Choices</li>
                    </ul>
                  </div>
                </div>
                <div className="row mx-auto">
                  <div className="col-12">
                    <span className=" d-flex justify-content-center">
                      <button className="btn" id="full-menu"><Link to="/menu" className="buttontext">OUR FULL MENU</Link></button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


            <div className="row row-content d-flex">
              <div className="col-lg-4 col-8 mx-auto">
                <div className="picture2 box w-100 pt-0 pl-0">
                  <img src="/assets/images/latte.png" className="align-self-center" alt="latte" />
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="eco-friendly box mx-auto">
                  <h4>LOCALLY-OWNED <br />and ECO-FRIENDLY</h4>
                  <br />
                  <p>We care about our environment. We use eco-friendly products that help make a difference. Most of our
                    containers are made from renewable resources and are 100% compostable.</p>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="info box mx-auto">
                  <p>Located in the Princeton Club Court, across from Sears in East Towne Mall. Outdoor seating is
                    available.
                  </p>
                  <h4>HOURS:</h4>
                  <p>Monday - Saturday: 6:30am - 9pm<br />Kitchen Closes at 8pm</p>
                  <h5>WIRELESS INTERNET AVAILABLE</h5>
                </div>
              </div>
            </div>
          
        </div>
      )
    }
  }

export default Home;