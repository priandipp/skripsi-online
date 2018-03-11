import React from 'react';

export default ({ loginEvent }) => (
  <div className="field">
    <p className="control">
      <button className="button is-success" onClick={loginEvent}>
        Login
      </button>
    </p>
  </div>
);
