import React, { Component } from 'react';
import link from 'react-dom';
import "./Navbar.css";



var Component = React.createClass({
    render: function() {
      return (
        <div>
          <nav classname="navbar bg-dark container">
            <h4><link classname="link" to="/public/user" />User</h4>
            <h4><link classname="link" to="/public/home" />Home</h4>
            <h4><link classname="link" to="/public/budget" />Budget</h4>
          </nav>
          {'}'}
        </div>
      );
    }
  });

export default Navbar;