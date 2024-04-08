import React from 'react';
import './App.css';

function Header({ buttons }) {
  return (
    <div className="header">
      <div className="left-section">
        {buttons.left.map((button, index) => (
          <button className="button" key={index}>{button}</button>
        ))}
      </div>
      <div className="center-section">
        <h1>Title</h1>
      </div>
      <div className="right-section">
        {buttons.right.map((button, index) => (
          <button className="button" key={index}>{button}</button>
        ))}
      </div>
    </div>
  );
}

export default Header;