import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Router from './router/index';
import { Provider } from 'react-redux';
import store from './redux/store';

//store.subscribe(() => console.log('1212', store.getState()));



ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
