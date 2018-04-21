import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as types from '../redux/actions';
import TodoList from "./todoList";

const mapStateToProps = (state) => {
  return {
    counter: state.count.count
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  render() {
    const {increment, decrement, reset} = this.props;
    return (
      <div>
        {this.props.counter}
        <p onClick={() => increment()}>加加</p>
        <p onClick={() => decrement()}>减减</p>
        <p onClick={() => reset()}>归零</p>
        <TodoList/>
      </div>
    )
  }
}



export default Counter;

