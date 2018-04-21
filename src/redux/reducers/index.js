import {combineReducers} from 'redux';
import count from './count';
import todoList from './todoList';

export default combineReducers({
  count,
  todoList
});
