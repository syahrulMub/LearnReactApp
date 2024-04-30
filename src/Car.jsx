import React from "react";

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h2>this car is have {this.props.color} color</h2>;
  }
}

export default Car;
