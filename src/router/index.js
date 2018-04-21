import React, {Component} from 'react';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Content from '../pages/content';
import Count from '../pages/count';
import TodoList from '../pages/todoList';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/content" component={Content} />
          <Route path="/count" component={Count} />
          <Route path="/todoList" component={TodoList} />
        </Switch>
      </Router>
     
    )
  }
}