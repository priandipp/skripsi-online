import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-start">
      <div className="navbar-item">
        <button className="button is-small">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <button className="button is-pulled-right is-small">Logout</button>
      </div>
    </div>
  </nav>
);

export default Navbar;
