import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Provider,
} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import App from './App';
import store from './redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <ReduxToastr
          timeOut={4000}
          closeOnToastrClick
        />
        <App />
      </>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
