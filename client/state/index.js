import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createActionBuffer from 'redux-action-buffer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [thunk, createLogger({ collapsed: true })];
const stateMiddleware = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(rootReducer, stateMiddleware);

export default store;