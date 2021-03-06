import {
  POSTING_FETCH_SUCCESS,
} from './constants'

const initialState = {
  currentPosting: {}
}

export default function (state = initialState, action) {
  switch (action.type) {

    case POSTING_FETCH_SUCCESS:
      return {
        ...state,
        currentPosting: action.currentPosting
      }

    default:
      return state
  }
}
