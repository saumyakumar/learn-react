import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <h1>About page</h1>
        <UserClass name={"Saumya"} address={"saumya address"} />
        <UserClass name={"kumar"} address={"kumar address"} />
      </>
    );
  }
}

export default About;
