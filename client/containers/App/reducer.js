import { REHYDRATE } from 'redux-persist';

import {
  POSTINGS_FETCH_SUCCESS,
} from './constants'


export default function (state = {}, action) {
  switch (action.type) {
    case POSTINGS_FETCH_SUCCESS:
      return {
        ...state,
        postings: action.postings
      }
    default:
      return state
  }
}
