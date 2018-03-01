import React, { Component } from 'react';

class Sidebar extends Component {
  menus = ['Mahasiswa', 'Pegawai', 'Bimbingan'];

  render() {
    return (
      <aside
        className="column is-2 menu"
        style={{
          padding: 0
        }}
      >
        <ul className="menu-list">
          {this.menus.map(menu => (
            <li>
              <a className="is-radiusless">{menu}</a>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
