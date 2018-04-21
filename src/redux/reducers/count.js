const initialState = {
  count: 0,
  belong: '默认'
};
export default function count (state=initialState, action)  {
  switch (action.type){
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    case 'RESET':
      return {count: state.count = 0};
    default:
      return state
  }
};

