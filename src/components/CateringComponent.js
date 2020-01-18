import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Row, Col, Collapse } from 'reactstrap';

 class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBoxedOpen: false,
      isGroupOpen: false,
      isBreakfastOpen: false,
      isDessertOpen: false,
      isDrinkOpen: false,
    }

    this.toggleBoxed = this.toggleBoxed.bind(this);
    this.toggleGroup = this.toggleGroup.bind(this);
    this.toggleBreakfast = this.toggleBreakfast.bind(this);
    this.toggleDessert = this.toggleDessert.bind(this);
    this.toggleDrink = this.toggleDrink.bind(this);

  }

  toggleBoxed() {
    this.setState({
      isBoxedOpen: !this.state.isBoxedOpen
    })
  }

  toggleGroup() {
    this.setState({
      isGroupOpen: !this.state.isGroupOpen
    })
  }

  toggleBreakfast() {
    this.setState({
      isBreakfastOpen: !this.state.isBreakfastOpen
    })
  }

  toggleDessert() {
    this.setState({
      isDessertOpen: !this.state.isDessertOpen
    })
  }

  toggleDrink() {
    this.setState({
      isDrinkOpen: !this.state.isDrinkOpen
    })
  }


  render() {
    return(
      <React.Fragment>
        <div class="container">
          <Row className="row-content">
            <div class="col col-lg-4 page-header">
              <h2>CATERING</h2>
              <h3>How It Works</h3>
              <p>For the best possible service, please place your orders 24 hours in advance.
                We take cash, credit cards, and local checks. We will provide all you need as
                far as plates, cutlery, and cups.
                <br />ASK IF DELIVERY IS AVAILABLE
                <br />Delivery charge may apply.</p>
              <br />
              <h3>Local and Eco-Friendly</h3>
              <p>We care about our environment. We use eco-friendly products that help make a
                difference. Most of our containers are made from renewable resources & are 100% compostable.</p>
              <br />

            </div>


            <div class="col-12 col-lg-8 mx-auto">
              <div class="page-header">
                <h2>CATERING MENU</h2>
                <p>Menu and pricing are subject to change -- please call to verify.</p>
              </div>
              <div id="accordion">

                <div class="card">
                  <a data-toggle="collapse" data-target="#boxed">
                    <div role="tab" class="card-header">
                      <h3>Boxed Lunches</h3>
                      <p>1 serving</p>
                    </div>
                  </a>
                  <div class="collapse" id="boxed" data-parent="#accordion">
                    <div class="card-body">
                      <p>Each box comes with gourmet kettle chips & a fresh baked chocolate chip cookie for one.
                      </p>
                      <h3>Sandwiches and Wraps</h3>
                      <h5>Chipotle Roast Beef</h5>
                      <p>$8.99 -- sliced roast beef + chipotle aioli + sauteed red bell peppers + romaine
                        lettuce serve on our freshly-baked multigrain bread</p>
                      <h5>Grilled Veggie Sandwich</h5>
                      <p>$8.99 -- portabella mushrooms + zucchini + red pepper + spring mix + balsamic dressing on foccacia
                      </p>
                      <h5>Chicken Salad Sandwich</h5>
                      <p>$8.99 -- house-made chicken salad (marinated chicken, apples, grapes, and onion with special sauce) +
                        romaine lettuce + toasted pecans on multigrain bread</p>
                      <h5>Sir Isaac Turkey</h5>
                      <p>$8.99 -- smoked turkey + cheddar + sweet apple + strawberry mayo on multigrain bread</p>
                      <h5>Tuna Salad Wrap</h5>
                      <p>$8.99 -- housemade tuna salad + tomato + cucumber + spring mix in a spinach tortilla</p>
                      <h5>Grilled Chicken Pesto</h5>
                      <p>$8.99 -- foccacia + chicken + provolone + red bell pepper + pine nuts + basil pesto</p>
                      <h5>Princeton Club Wrap</h5>
                      <p>$8.99 -- turkey + bacon + romaine lettuce + avocado + mayo in a spinach tortilla</p>
                      <h5>Porta Ham & Swiss</h5>
                      <p>$8.99 -- pit ham + swiss + portabella mushrooms + apricot dijon mustard on multigrain bread</p>
                      <h5>Turkey Mediterranean</h5>
                      <p>$8.99 -- smoked turkey + feta basil mayo + tomato + romaine lettuce served on our freshly-baked
                        multigrain bread.</p>
                      <br />
                      <h3>Salads</h3>
                      <h5>Greek Salad</h5>
                      <p>$7.99 -- romaine lettuce + feta + tomato + black olives + cucmber + red onion + oregano
                        <br /> <small>ADD chicken $2.00</small></p>
                      <h5>Chicken Pasta Salad</h5>
                      <p>$8.99 -- our house-made pasta salad mixed with spring mix + marinated chicken + pine nuts + Italian
                        dressing
                        served with a freshly-baked baguette</p>
                      <h5>Strawberry Spinach Salad</h5>
                      <p>$7.99 -- spinach + strawberries + apple + pecans + raspberry vinaigrette + bleu cheese
                        <br /> <small>ADD chicken $2.00</small></p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <a data-toggle="collapse" data-target="#trays">
                    <div role="tab" class="card-header">
                      <h3>Group Trays</h3>
                      <p>8 - 10 servings</p>
                    </div>
                  </a>
                  <div class="collapse" id="trays" data-parent="#accordion">
                    <div class="card-body">
                      <h3>Sandwiches and Wraps</h3>
                      <h5>Chicken Salad Wrap</h5>
                      <p>$59.99 -- house-made chicken salad (marinated chicken, apples, grapes, and onion with special sauce)
                        + romaine lettuce + toasted pecans + cracked pepper wrapped in a spinach tortilla
                      </p>
                      <h5>Princeton Club Wrap</h5>
                      <p>$59.99 -- turkey + bacon + romaine lettuce + avocado + mayo in a spinach tortilla</p>
                      <h5>Crisp Veggie Wrap</h5>
                      <p>$59.99 -- tomato + cucumber + red onion + avocado + romaine lettuce +
                        carrot + sunflower seeds + ranch in a spinach tortilla</p>
                      <h5>Chipotle Roast Beef</h5>
                      <p>$59.99 -- sliced roast beef + chipotle aioli + sauteed red bell peppers + romaine
                        lettuce serve on our freshly-baked multigrain bread</p>
                      <h5>Turkey Mediterranean</h5>
                      <p>$59.99 -- smoked turkey + feta basil mayo + tomato + romaine lettuce served on our freshly-baked
                        multigrain bread.</p>
                      <h5>Chicken Salad Sandwich</h5>
                      <p>$59.99 -- house-made chicken salad (marinated chicken, apples, grapes, and onion with special sauce)
                        + romaine lettuce + toasted pecans on multigrain bread</p>
                      <h5>Grilled Chicken Pesto</h5>
                      <p>$59.99 -- foccacia + chicken + provolone + red bell pepper + pine nuts + basil pesto</p>
                      <h5>Sir Isaac Turkey</h5>
                      <p>$59.99 -- smoked turkey + cheddar + sweet apple + strawberry mayo on multigrain bread</p>
                      <h5>Porta Ham & Swiss</h5>
                      <p>$59.99 -- pit ham + swiss + portabella mushrooms + apricot dijon mustard on multigrain bread</p>
                      <h5>Grilled Veggie Sandwich</h5>
                      <p>$59.99 -- portabella mushrooms + zucchini + red pepper + spring mix + balsamic dressing on foccacia
                      </p>

                      <br />
                      <h3>Salads</h3>
                      <h5>Greek Salad</h5>
                      <p>$36.99 -- romaine lettuce + feta + tomato + black olives + cucmber + red onion +
                        oregano served with toasted pita bread</p>
                      <h5>Chicken Pasta Salad</h5>
                      <p>$36.99 -- our house-made pasta salad mixed with spring mix + marinated chicken + pine nuts + Italian
                        dressing served with a freshly-baked baguette</p>
                      <h5>Strawberry Spinach Salad</h5>
                      <p>$36.99 -- spinach + strawberries + apple + pecans + raspberry vinaigrette +
                        a side of bleu cheese served with a freshly-baked baguette</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <a data-toggle="collapse" data-target="#breakfast">
                    <div role="tab" class="card-header">
                      <h3>Breakfast Items</h3>
                      <p>10 - 12 servings</p>
                    </div>
                  </a>
                  <div class="collapse" id="breakfast" data-parent="#accordion">
                    <div class="card-body">
                      <h5>Assorted Pastry Tray</h5>
                      <p>$25.99 -- danishes + cinnamon rolls + morning buns + scones + muffins</p>
                      <h5>Yogurt Parfait</h5>
                      <p>$12.99 -- vanilla yogurt + mixed berries + crunchy granola</p>
                      <h5>Fruit Tray</h5>
                      <p>$25.99 -- fresh seasonal fruit with our sweet yogurt dip</p>
                      <h5>Cool Beans Coffee for the Group</h5>
                      <p>$15.99 -- your choice of our hot, fresh coffee served in an insulated, portable container</p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <a data-toggle="collapse" data-target="#dessert">
                    <div role="tab" class="card-header">
                      <h3>Dessert Trays</h3>
                      <p>10 servings</p>
                    </div>
                  </a>
                  <div class="collapse" id="dessert" data-parent="#accordion">
                    <div class="card-body">
                      <h5>Pound Cake</h5>
                      <p>$22.00 -- our delicious lemon loaf</p>
                      <h5>Assorted Bars</h5>
                      <p>$32.00 -- rockslide brownies + toffee crunch blondies + white chocolate raspberry cheesecake bars</p>
                      <h5>Chocolate Chip Cookies</h5>
                      <p>$14.00 -- freshly baked chocolate chip cookies</p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <a data-toggle="collapse" data-target="#sides-and-drinks">
                    <div role="tab" class="card-header">
                      <h3>Sides and Drinks</h3>
                      <p>10-12 servings</p>
                    </div>
                  </a>
                  <div class="collapse" id="sides-and-drinks" data-parent="#accordion">
                    <div class="card-body">
                      <h3>Sides</h3>
                      <h5>Pasta Salad</h5>
                      <p>$15.00 -- add on to any sandwich tray order</p>
                      <h5>Fresh Fruit Tray</h5>
                      <p>$25.00 -- add on to any sandwich tray order</p>
                      <br />
                      <h3>Drinks</h3>
                      <p>choose from an assortment of soda, water, and bottled juices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="page-header mx-auto my-5">
              <h3>Gift Certificates Available</h3>
              <p>Choose any amount.</p>
              <p>Call or stop in to get yours today!</p>
            </div>
          </Row>
        </div>
      </React.Fragment>
    )
  }
 }

 export default Catering;