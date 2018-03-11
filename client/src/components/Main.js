import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Main = () => (
  <div
    className="section is-paddingless"
    style={{
      height: '100%'
    }}
  >
    <div
      className="columns"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        margin: 0
      }}
    >
      <Sidebar />
      <Content />
    </div>
  </div>
);

export default Main;
