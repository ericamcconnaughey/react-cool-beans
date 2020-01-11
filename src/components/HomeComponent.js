import React from 'react';

function Home(props) {
  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12 col-lg-8 mx-auto">
          <div id="homeCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#homeCarousel" data-slide-to="1"></li>
              <li data-target="#homeCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="/assets/images/panini.png"
                  alt="A panini on a plate with a Cool Beans mug next to it" />
                <div className="carousel-caption">
                  <h3>Enjoy a Treat from our Menu</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/assets/images/indoorshot1.png"
                  alt="A look inside Cool Beans Coffee Cafe; showing wooden tables and chairs, a horse sculpture, glass doors leading to the private meeting room, and a person working at a table. " />
                <div className="carousel-caption">
                  <h3>Stay a While</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/assets/images/outdoorshot1.png"
                  alt="A look at Cool Beans from outside; the Cool Beans sign in red on a silver building with 8 large windows." />
                <div className="carousel-caption">
                  <h3>Find us in East Towne</h3>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      {/* div className="d-flex" */}
      <div className="row row-content">
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

        <div className="col-12 col-lg-4">
          <div className="row row-content">
            <div className="col-12">
              <div className="catering box mx-auto">
                <h4>We can</h4>
                <h3>CATER</h3>
                <h4>your next event!</h4>
                <button role="link" className="btn offset-4 offset-lg-3"><a href="catering.html">Learn More</a></button>
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
        </div>


        <div className="col-12 col-lg-4">
          <div className="menu box mx-auto">
            <h3>FOOD & DRINK</h3>
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
                  <li>Lattes & Cappuccinos</li>
                  <li>Chai Tea</li>
                  <li>Loose Leaf Teas</li>
                  <li>Healthy Menu Choices</li>
                </ul>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="col-12">
                <button className="btn offset-4 offset-lg-3" id="full-menu"><a href="menu.html">OUR FULL MENU</a></button>
              </div>
            </div>
          </div>
        </div>


        <div className="row row-content">
          <div className="col-lg-3 col-8 mx-auto">
            <div className="picture2 box">
              <img src="/assets/images/latte.png" alt="latte" />
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="eco-friendly box mx-auto">
              <h4>Locally-Owned and Eco-Friendly</h4>
              <p>We care about our environment. We use eco-friendly products that help make a difference. Most of our
                containers are made from renewable resources & are 100% compostable.</p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="info box mx-auto">
              <p>Located in the Princeton Club Court, across from Sears in East Towne Mall. Outdoor seating is
                available.
              </p>

              <h5>HOURS:</h5>
              <p>Monday - Saturday: 6:30am - 9pm<br />Kitchen Closes at 8pm</p>

              <h5>WIRELESS INTERNET AVAILABLE</h5>

              <p>We know you have a lot of choices. <br />Thank you for choosing us!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;