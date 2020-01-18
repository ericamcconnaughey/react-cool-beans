import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Row, Col, Collapse } from 'reactstrap';

 class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHotOpen: false,
      isSaladOpen: false,
      isBreakfastOpen: false,
      isColdOpen: false,
      isDrinkOpen: false,
      isKidOpen: false
    }

    this.toggleHot = this.toggleHot.bind(this);
    this.toggleSalad = this.toggleSalad.bind(this);
    this.toggleBreakfast = this.toggleBreakfast.bind(this);
    this.toggleCold = this.toggleCold.bind(this);
    this.toggleDrink = this.toggleDrink.bind(this);
    this.toggleKid = this.toggleKid.bind(this);

  }

  toggleHot() {
    this.setState({
      isHotOpen: !this.state.isHotOpen
    })
  }

  toggleSalad() {
    this.setState({
      isSaladOpen: !this.state.isSaladOpen
    })
  }

  toggleBreakfast() {
    this.setState({
      isBreakfastOpen: !this.state.isBreakfastOpen
    })
  }

  toggleCold() {
    this.setState({
      isColdOpen: !this.state.isColdOpen
    })
  }

  toggleDrink() {
    this.setState({
      isDrinkOpen: !this.state.isDrinkOpen
    })
  }

  toggleKid() {
    this.setState({
      isKidOpen: !this.state.isKidOpen
    })
  }



  render() {
    return(
      <React.Fragment>
        <div className="container">
          <Row className="row-content">
            <Col className="col-12 col-lg-10 mx-auto">
              <div className="page-header">
                <h2>OUR MENU</h2>
                <p>Menu and prices are subject to change -- please call to verify.</p>
              </div>
              <div id="accordion">
                <Card>
                  <a data-toggle="collapse" data-target="#hot-food">
                    <CardHeader onClick={this.toggleHot}>
                      <h4>Hot Food</h4>
                      <p>sandwiches, wraps, soup, and quiche</p>
                    </CardHeader>
                  </a>
                  <Collapse isOpen={this.state.isHotOpen} id="hot-food" data-parent="#accordion">
                    <CardBody>
                      <p>Served with side of your choice.</p>
                      <h5>Grilled Chicken Pesto</h5>
                      <p>$7.99 -- foccacia + chicken + provolone + red bell pepper + pine nuts + basil pesto</p>
                      <h5>Sir Isaac Turkey</h5>
                      <p>$7.29 -- smoked turkey + cheddar + sweet apple + strawberry mayo on multigrain bread</p>
                      <h5>Jerk Mango Chicken</h5>
                      <p>$7.49 -- roasted chicken + provolone + fresh mango + red onion + jerk sauce on pita</p>
                      <h5>Southwestern Chicken Wrap</h5>
                      <p>$7.69 -- chicken + bacon + cheddar + red pepper + red onion + ranch in a spinach tortilla</p>
                      <h5>Porta Ham & Swiss</h5>
                      <p>$7.49 -- pit ham + swiss + portabella mushrooms + apricot dijon mustard on multigrain bread</p>
                      <h5>Caprese Sandwich</h5>
                      <p>$7.69 -- fresh mozarella + tomato + basil pesto on a baguette</p>
                      <h5>Tuna Melt</h5>
                      <p>$7.69 -- house-made tuna salad + cheddar + tomato on multigrain bread</p>
                      <h5>Grilled Veggie Sandwich</h5>
                      <p>$7.69 -- portabella mushrooms + zucchini + red pepper + spring mix + balsamic dressing on foccacia
                      </p>
                      <h5>Deluxe Grilled Cheese</h5>
                      <p>$7.49 -- cheddar + feta + bacon + red onion on foccacia</p>
                      <h5>Quiche of the day</h5>
                      <p>$5.99 -- (upgrade side to a cup of soup for an additional $2.)</p>
                      <h5>Soup of the Day</h5>
                      <p>$3.79 -- cup (served with flatbread crackers)</p>
                      <p>$5.49 -- bowl (served with baguette)</p>
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <a data-toggle="collapse" data-target="#salads">
                    <CardHeader onClick={this.toggleSalad}>
                      <h4>Salads</h4>
                      <p>served with freshly baked bread</p>
                    </CardHeader>
                  </a>
                  <Collapse isOpen={this.state.isSaladOpen} id="salads" data-parent="#accordion">
                    <CardBody>
                      <h5>Greek Salad</h5>
                      <p>$7.39 -- romaine lettuce + feta + tomato + black olives + cucmber + red onion + oregano</p>
                      <h5>Chicken Salad on Baby Greens</h5>
                      <p>$8.49 -- spring mix + house-made chicken salad + tomato + pecans</p>
                      <h5>Fresh-chopped Salad with Chicken</h5>
                      <p>$7.89 -- spring mix + roasted chicken + sunflower seeds + cucumber + carrot + radish + balsamic ranch
                      </p>
                      <h5>Cobb Salad</h5>
                      <p>$8.49 -- spring mix + chicken + bacon + tomato + avocado + egg + red onion + bleu cheese</p>
                      <h5>Strawberry Spinach Salad</h5>
                      <p>$8.49 -- spinach + strawberries + apple + pecans + raspberry vinaigrette + bleu cheese</p>
                      <h5>Cranberry Spinach Salad</h5>
                      <p>$7.39 -- spinach + cranberries + feta + toasted walnuts + cilantro dressing</p>
                      <h5>Garden Salad</h5>
                      <p>$4.49 -- spring mix + red onion + carrot + flatbread crackers</p>
                      <h5>ADD Chicken to any Salad $1.50</h5>
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <a data-toggle="collapse" data-target="#breakfast">
                    <CardHeader onClick={this.toggleBreakfast}>
                      <h4>Breakfast</h4>
                      <p>served all day</p>
                    </CardHeader>
                  </a>
                  <Collapse isOpen={this.state.isBreakfastOpen} id="breakfast" data-parent="#accordion">
                    <CardBody>
                      <h5>Breakfast Ham Quesadilla</h5>
                      <p>$5.99 -- eggs + ham + swiss + portabella mushrooms in a spinach tortilla</p>
                      <h5>Greek Burrito with fruit</h5>
                      <p>$6.59 -- eggs + feta + spinach + red onion + tomato + black olives in a spinach tortilla</p>
                      <h5>Cool Beans classNameic Burrito with fruit</h5>
                      <p>$6.59 -- eggs + bacon + cheddar + red onion + portabella mushrooms in a spinach tortilla</p>
                      <h5>Hammin' It Up Burrito with fruit</h5>
                      <p>$6.59 -- eggs + ham + cheddar + red onion + portabella mushrooms + sour cream in a spinach tortilla
                      </p>
                      <h5>Basic Burrito with fruit</h5>
                      <p>$6.39 -- eggs + your choice of ham or bacon + eggs + cheddar in a spinach tortilla</p>
                      <h5>California Breakfast Sandwich</h5>
                      <p>$6.39 -- eggs + bacon + tomato + avocado + chipotle sauce on toasted multigrain bread</p>
                      <h5>Fiesta Omelet with multigrain toast</h5>
                      <p>$5.69 -- two eggs + avocado + cheddar + salsa</p>
                      <h5>Build-your-own Bagel Breakfast Sandwich</h5>
                      <p>$4.79 -- new york-style bagel + eggs + your choice of cheese (see cheeses + additional toppings
                        below)</p>
                      <h5>Build-your-own Open Face Omelet with multigrain toast</h5>
                      <p>$4.79 -- two eggs + your choice of cheese (see cheeses + additional toppings below)</p>
                      <br />
                      <div className="row extras">
                        <div className="col-6">
                          <h5>Cheese</h5>
                          <br />
                          <p>cheddar, swiss, provolone, american, feta</p>
                          <p>extra cheese 75&#162;</p>
                        </div>
                        <div className="col-6">
                          <h5>Toppings</h5>
                          <p>Portabella mushrooms, red pepper,
                            red onion, spinach, tomato (50&#162; each)</p>
                          <p>Bacon, ham, chicken, turkey, avocado (75&#162; each)</p>
                        </div>
                      </div>
                      <div className="row more">
                        <div className="col-md-6">
                          <h5>Quiche</h5>
                          <p>$5.99 -- choose from today’s specials. served with fresh fruit.</p>
                          <h5>Fresh Fruit Bowl</h5>
                          <p>$5.49 -- fresh seasonal fruit + sweet yogurt dip</p>
                          <h5>Yogurt Parfait</h5>
                          <p>$3.79 -- vanilla yogurt + mixed berries + granola</p>
                        </div>
                        <div className="col-md-6">
                          <h5>Cup of Oats</h5>
                          <p>$3.79 -- oatmeal + banana + pecans + brown sugar</p>
                          <h5>New York-Style plain bagel</h5>
                          <p>$2.39 -- served toasted with cream cheese</p>
                          <h5>Toast</h5>
                          <p>$2.39 -- your choice of multigrain, white, or gluten-free</p>
                        </div>
                      </div>
                      <h5>French baguette</h5>
                      <p>$2.39</p>
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <a data-toggle="collapse" data-target="#cold-food">
                    <CardHeader onClick={this.toggleCold}>
                      <h4>Cold Food</h4>
                      <p>sandwiches and wraps</p>
                    </CardHeader>
                  </a>
                  <Collapse isOpen={this.state.isColdOpen} id="cold-food" data-parent="#accordion">
                    <CardBody>
                      <p>Served with side of your choice.</p>
                      <h5>Chicken Salad Sandwich</h5>
                      <p>$7.59 -- house-made chicken salad + romaine lettuce + toasted pecans on multigrain bread</p>
                      <h5>Turkey Avocado Sandwich</h5>
                      <p>$7.59 -- turkey + avocado + lettuce + tomato + red onion on toasted multigrain bread</p>
                      <h5>Crisp Veggie Wrap</h5>
                      <p>$7.29 -- tomato + cucumber + red onion + avocado + romaine lettuce +
                        carrot + sunflower seeds + ranch in a spinach tortilla</p>
                      <h5>Princeton Club Wrap</h5>
                      <p>$7.89 -- turkey + bacon + romaine lettuce + avocado + mayo in a spinach tortilla</p>
                      <h5>Tuna Salad Wrap</h5>
                      <p>$7.69 -- housemade tuna salad + tomato + cucumber + spring mix in a spinach tortilla</p>
                    </CardBody>
                  </Collapse>
                </Card>

                <Card>
                  <a data-toggle="collapse" data-target="#drinks">
                    <CardHeader onClick={this.toggleDrink}>
                      <h4>Drinks</h4>
                      <p>cafe classics, house specials, teas, smoothies, and shakes</p>
                    </CardHeader>
                  </a>
                  <Collapse isOpen={this.state.isDrinkOpen} id="drinks" data-parent="#accordion">
                    <CardBody>
                      <h5>Caf&#233; Classics</h5>
                      <p>Hot sizes: 12 oz., 16 oz., or 20 oz. -- Iced sizes: 16 oz. or 24 oz.</p>
                      <div className="row classics">
                        <div className="col-md-6">
                          <p>Endless Cup of Coffee</p>
                          <p>Iced Cold Brew</p>
                          <p>Espresso</p>
                          <p>Americano</p>
                          <p>Hot Chocolate/Steamer <br /><small>8 oz. size available</small></p>
                        </div>
                        <div className="col-md-6">
                          <p>Cappuccino</p>
                          <p>Mocha</p>
                          <p>Caf&#233; au lait</p>
                          <p>Latte</p>
                          <p>Flat White <br /><small>equal parts espresso and steamed milk</small></p>
                        </div>
                      </div>
                      <br />
                      <h5>House Specials</h5>
                      <div className="row specials">
                        <div className="col-md-6">
                          <p>White Cloud<br /><small>"white" coffee with white chocolate,
                              macadamia nut, cinnamon, and steamed milk)</small></p>
                          <p>White Chocolate Raspberry Truffle</p>
                          <p>Flavored Latte</p>
                          <p>Caramel Latte</p>
                        </div>
                        <div className="col-md-6">
                          <p>Turtle Mocha<br /><small>chocolate + caramel + macadamia nut flavors</small></p>
                          <p>Caf&#233; Miel<br /><small>honey + cinnamon latte</small></p>
                          <p>White Mocha</p>
                          <p>Italian Soda</p>
                        </div>
                      </div>
                      <br />
                      <h5>Teas</h5>
                      <div className="row teas">
                        <div className="col-md-6">
                          <p>Chai Tea Latte</p>
                          <p>Mango Chai Latte</p>
                          <p>Red Eye Chai</p>
                        </div>
                        <div className="col-md-6">
                          <p>Iced Mango Green Tea</p>
                          <p>Loose Leaf Tea</p>
                          <p>Black Iced Tea<br /><small>free refills</small></p>
                        </div>
                      </div>
                      <br />
                      <h5>Blended</h5>
                      <div className="row blended">
                        <div className="col-md-6">
                          <p>Mocha Slide</p>
                          <p>Caramel Slide</p>
                          <p>Eastside Slide<br /><small>our original vanilla hazelnut iced blended coffee</small></p>
                        </div>
                        <div className="col-md-6">
                          <p>Peanut Butter Cup Slide</p>
                          <p>Iced Blended Chai</p>
                          <p>Iced Blended Mango Chai</p>
                        </div>
                      </div>
                      <br />
                      <h5>Smoothies</h5>
                      <div className="row smoothies">
                        <div className="col-md-6">
                          <p>Cool Beans Classic Smoothie<br /><small>strawberries + banana + orange juice</small></p>
                          <p>Blue Cow Smoothie<br /><small>blueberries + peaches + apple juice + honey</small></p>
                        </div>
                        <div className="col-md-6">
                          <p>Peach Blossom Smoothie<br /><small>peaches + peach nectar + guava juice</small></p>
                          <p>Mango Tango Smoothie<br /><small>mangoes + banana + guava juice</small></p>
                        </div>
                      </div>
                      <br />
                      <h5>Shakes</h5>
                      <div className="row shakes">
                        <div className="col-md-6">
                          <p>Banana Split Protein Shake<br /><small>strawberries + banana + peanut butter + soy milk + protein
                              powder</small></p>
                          <p>Espresso Recovery Protein Shake<br /><small>espresso + slide mix + chocolate sauce + peanut
                              butter + protein powder</small></p>
                        </div>
                        <div className="col-md-6">
                          <p>Go Bananas! Protein Shake<br /><small>banana + soy milk + caramel + peanut butter + protein
                              powder</small></p>
                          <p>Espresso Shake<br /><small>espresso + ice cream + milk + whipped cream</small></p>
                        </div>
                      </div>
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <a data-toggle="collapse" data-target="#forkids">
                    <CardHeader onClick={this.toggleKid}>
                      <h4>Kids Menu</h4>
                      <p>sandwiches served on white bread with Goldfish crackers and a juice box</p>
                    </CardHeader>
                  </a>
                  <Collapse isOpen={this.state.isKidOpen} id="forkids" data-parent="#accordion">
                    <CardBody>
                      <h5>Grilled Cheese Sandwich</h5>
                      <p>$3.49 -- grilled with American cheese</p>
                      <br />
                      <h5>PB&J Sandwich</h5>
                      <p>$3.49 -- with your choice of strawberry or grape jelly</p>
                    </CardBody>
                  </Collapse>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
 }

 export default Menu;