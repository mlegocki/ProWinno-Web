import { combineReducers } from 'redux';

import App from '../containers/App/reducer';
import Posting from '../containers/Posting/reducer';

const rootReducer = combineReducers({
  App,
  Posting
})

export default rootReducer;