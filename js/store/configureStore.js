import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import ReduxThunk from 'redux-thunk';
import Promises from '../middleware/promises';


import sagas from '../saga/specific';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk,Promises, logger, sagaMiddleware));
  sagaMiddleware.run(sagas);
  return store;
}

