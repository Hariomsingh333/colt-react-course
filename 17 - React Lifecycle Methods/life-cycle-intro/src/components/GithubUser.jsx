import React, { Component } from "react";
import axios from "axios";
class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      name: "",
    };
  }
  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.name}`;
    let res = await axios.get(url);
    console.log(res);
    this.setState({
      img: res.data.avatar_url,
      name: res.data.name,
    });
  }
  render() {
    return (
      <div>
        <h3>name: {this.state.name}</h3>
        <img src={this.state.img} alt={this.state.name} />
      </div>
    );
  }
}
export default GithubUser;
