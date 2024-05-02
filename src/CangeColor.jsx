import React from "react";

class ChangeColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  shouldComponentUpdate() {
    return true;
  }
  OnChangeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.OnChangeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default ChangeColor;
