import React, { Component } from 'react';

import UsernameInput from '../components/UsernameInput';
import PasswordInput from '../components/PasswordInput';
import LoginButton from '../components/LoginButton';

export default class Login extends Component {
  login = () => {
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-4 is-offset-4">
                <UsernameInput />
                <PasswordInput />
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    Dosen
                  </label>
                </div>
                <LoginButton loginEvent={this.login} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
