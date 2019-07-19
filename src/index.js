import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const $root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    $root
  )
}

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    const Apps = require('./App').default;
    render(Apps);
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
