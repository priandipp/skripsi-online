import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faCheck } from '@fortawesome/fontawesome-free-solid';

export default () => (
  <div className="field">
    <p className="control has-icons-left has-icons-right">
      <input className="input" type="text" placeholder="Username" />
      <span className="icon is-small is-left">
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span className="icon is-small is-right">
        <FontAwesomeIcon icon={faCheck} />
      </span>
    </p>
  </div>
);
