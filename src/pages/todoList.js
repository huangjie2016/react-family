import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as types from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    belong: state.todoList.belong
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
      value: '',
      todoList: [
        {id: 0, value: ''}
      ]
    }
  }
  
  render() {
    const {like, subscribe} = this.props;
    const li = this.state.todoList.map((item, index) => (
      <li key={index}>
        <span>{item.id}: </span>
        <span>{item.value} -- </span>
        <span>{this.props.belong}</span>
      </li>
    ));
    
    return (
      <div>
        <input type="text" placeholder="todo..." value={this.state.value}
               onChange={(e) => this.setState({value:e.target.value})} />
        <button onClick={this.addList.bind(this)}>添加</button><br/>
        <ul>
          {li}
        </ul>
        <br/>
        <button onClick={() => like('喜欢')}>喜欢</button>
        <button onClick={() => subscribe('订阅')}>订阅</button>
        <p><a href="https://github.com/huangjie2016/react-family">给我star</a></p>
      </div>
    )
  }
  
  addList() {
    let todoList = {id: this.state.id++, value: this.state.value};
    this.setState({
      value: '',
      todoList: this.state.todoList.concat(todoList)
    })
    
  }
}

export default TodoList;
