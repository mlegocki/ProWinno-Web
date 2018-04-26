import axios from 'axios';

import {
  POSTING_FETCH_REQUEST,
  POSTING_FETCH_SUCCESS,
  POSTING_FETCH_FAILURE
} from './constants';

export const postingRequest = () => ({ type: POSTING_FETCH_REQUEST })

export const postingRequestSuccess = currentPosting => ({ type: POSTING_FETCH_SUCCESS, currentPosting })

export const postingRequestFailure = error => ({ type: POSTING_FETCH_FAILURE, error })

export const postingRequestGet = postingId => axios.get(`/api/postings/${postingId}`)

export const fetchSinglePosting = (postingId) =>
  dispatch => {
    dispatch(postingRequest());
    return postingRequestGet(postingId)
      .then(response => dispatch(postingRequestSuccess(response.data)))
      .catch(error => {
        dispatch(postingRequestFailure(error))
        console.log(error)
      })
  }