import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/fontawesome-free-solid';

export default () => (
  <div className="field">
    <p className="control has-icons-left">
      <input className="input" type="password" placeholder="Password" />
      <span className="icon is-small is-left">
        <FontAwesomeIcon icon={faLock} />
      </span>
    </p>
  </div>
);
