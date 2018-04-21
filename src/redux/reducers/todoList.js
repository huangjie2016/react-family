const initialState = {
  belong: '默认'
};
export default function todoList (state=initialState, action)  {
  switch (action.type){
    case 'LIKE':
      return {belong: action.text};
    case 'SUBSCRIBE':
      return {belong: action.text};
    default:
      return state;
  }
};

