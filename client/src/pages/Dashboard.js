import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';

class Dashboard extends Component {
  login = () => {
    this.props.history.push('/daftar');
  };

  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default Dashboard;
