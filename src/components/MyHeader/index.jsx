import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';

export default class MyHeader extends Component {
  render() {
    return (
      <header className="my-header">
        <div className="demo-logo">
          <Link to="/">My Portfolio</Link>
        </div>
        <nav className="nav-links">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/Individual">Individual works</NavLink>
        </nav>
      </header>
    );
  }
}