import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import stripsReducer from './store/reducers/stripsReducer';
import UIReducer from './store/reducers/UIReducer';
import bagReducer from './store/reducers/bagReducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);

const rootReducer = combineReducers({
  stripsPage: stripsReducer,
  UIPage: UIReducer,
  bagPage: bagReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
