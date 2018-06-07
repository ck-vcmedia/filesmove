import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
