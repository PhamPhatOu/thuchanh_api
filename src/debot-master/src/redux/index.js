import {
  applyMiddleware, compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './actions';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
