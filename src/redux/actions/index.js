import * as types from '../constants';
export const increment=()=>({
    type: types.INCREMENT
  }
);

export const decrement=()=>({
  type: types.DECREMENT
});

export const reset=()=>({
  type: types.RESET
});

export const like=(text)=>({
  type: types.LIKE,
  text
});

export const subscribe=(text)=>({
  type: types.SUBSCRIBE,
  text
});

