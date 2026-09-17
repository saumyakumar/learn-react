import React from "react";
import Address from "./Address";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "User",
        organization_url: "",
        avatar_url: "test",
      },
    };
    console.log(this.props.name, "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name, "child componentDidMount");
    const response = await fetch("https://api.github.com/users/saumyakumar");
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    console.log(this.props.name, "child render");
    const { address } = this.props;
    const { login, organization_url, avatar_url } = this.state.userInfo;

    return (
      <div>
        <img src={avatar_url} />
        <div>{login}</div>
        <div>{organization_url}</div>
        <Address address={address} name={name} />
      </div>
    );
  }
}

export default UserClass;
