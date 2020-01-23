import React, { Component } from "react";
import "./landing.scss";

import { Link } from "react-router-dom";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
        <div className="showcase">
          <div className="showcase-image"></div>
          <button className="showcase-button">Shop Now</button>
          <a href="#bottom">
          <i className="fas fa-angle-double-down fa-2x arrows-custom"></i>
          </a>
        </div>
       <section name='bottom' id='bottom'>
       <div className="products-category-wrapper">
          <Link to="/shirts">
            <div className="category-box cat-1">
              <div className="product-image t-shirts-image"></div>
              <div className="product-title">T-Shirts</div>
            </div>
          </Link>
          <Link to="/hoodies">
            <div className="category-box cat-2">
            <div className="product-image hoodies-image"></div>
            <div className="product-title">Hoodies</div>
            </div>

            
          </Link>
          <Link to="/beanies">
            <div className="category-box cat-3">
              <div className="product-image beanies-image"></div>
              <div className="product-title">Beanies</div>
            </div>
          </Link>
          <Link to="/hats">
            <div className="category-box cat-4">
              <div className="product-image hats-image"></div>
              <div className="product-title">Hats</div>
            </div>
          </Link>
        </div>
        <div className="other-category-wrapper">
          <div className="other-box other-1"></div>
          <div className="other-box other-2"></div>
        </div>
       </section>
      </div>
    );
  }
}

export default Landing;
