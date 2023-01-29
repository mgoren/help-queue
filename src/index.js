import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { createStore } from 'redux'; // deprecated
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import App from './components/App';
TimeAgo.addDefaultLocale(en)

const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState())); // just for debugging

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);