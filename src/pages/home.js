import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p><Link to="/login">Login GO...</Link></p>
      </div>
    )
  }
}
