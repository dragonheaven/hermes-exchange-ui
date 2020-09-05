import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './containers/App/App';
import configureStore, { history } from './redux/configureStore';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import socketMiddleware from './redux/middlewares/socket';

const store = configureStore();

// socketMiddleware.setupStore(store);

const RELEASE = '0.1.0';
// if (process.env.NODE_ENV === 'production') {
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_KEY,
  release: RELEASE
});
// }
// socketMiddleware.setupSocket();
// socketMiddleware.connect('reconnect', {});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// window.onbeforeunload = () => {
//   // store.dispatch({
//   //   type: types.BEFORE_PAGE_REFRESH,
//   //   payload: { }
//   // });
//   socketMiddleware.unloadEvent();
// };
