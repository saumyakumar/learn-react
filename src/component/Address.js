import React from "react";

class Address extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name, "address constructor");
  }
  componentDidMount() {
    console.log(this.props.name, "address componentDidMount");
  }
  render() {
    console.log(this.props.name, "address render");
    const { address } = this.props.address;
    return <div>{address}</div>;
  }
}

export default Address;
