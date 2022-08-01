import React from "react";
import template from "./Main.jsx";

class Main extends React.Component {
  render() {
    return template.call(this);
  }

  componentDidMount() {
    if (this.props.goTo) {
      document.getElementById(this.props.goTo).scrollIntoView();
    }
  }
}

export default Main;
