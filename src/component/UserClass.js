import React from "react";
import Address from "./Address";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "User",
        organizations_url: "",
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
    const { address, name } = this.props;
    const { login, organizations_url, avatar_url } = this.state.userInfo;

    return (
      <div style={{border: "2px solid", "marginBottom": "10px"}}>
        <img src={avatar_url} alt="avatar" width="100" height="100" />
        <div>{login}</div>
        <div>{organizations_url}</div>
        <Address address={address} name={name} />
      </div>
    );
  }
}

export default UserClass;
