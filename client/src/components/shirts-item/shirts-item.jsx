import React, { Component } from "react";
import "./shirts-item.scss";

class ShirtsItem extends Component {
  state = {};
  render() {
    return (
      <div className="shirts-item" alt={`${this.props.title}`}>
        <img className="image" src={this.props.imageUrl} />
        <div className="content-wrapper">
          <div className="title">{this.props.name}</div>
          <div className="price">{this.props.price}</div>
          <div className="sizes">{this.props.sizes}</div>
        </div>
      </div>
    );
  }
}

export default ShirtsItem;
