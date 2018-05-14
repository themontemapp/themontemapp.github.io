import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  handleClick = () => {
    this.props.onClick(this.props.returnValue);
  }

  render() {
    let imageClass;
    let buttonClass = "button";

    if (this.props.imageSource) {
      imageClass = "icon";
    } else if (this.props.type === "simple") {
      buttonClass = "simple-button";
    }

    return (
      <div>
        <button className= {buttonClass} onClick={this.handleClick}> {this.props.text}
        <img src={this.props.imageSource} className= {imageClass}></img>
        </button>
      </div>
    );
  }
}

export default Button;
