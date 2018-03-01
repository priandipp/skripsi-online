import React, { Component } from 'react';
import Navbar from './Navbar';

class Login extends Component {
  login = () => {
    this.props.history.push('/dashboard');
  };

  render() {
    return <Navbar />;
  }
}

export default Login;
