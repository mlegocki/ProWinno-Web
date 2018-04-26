import axios from 'axios';

import {
  POSTINGS_FETCH_REQUEST,
  POSTINGS_FETCH_SUCCESS,
  POSTINGS_FETCH_FAILURE,
} from './constants'

export const postingsRequest = () => ({ type: POSTINGS_FETCH_REQUEST })

export const postingsRequestSuccess = postings => ({ type: POSTINGS_FETCH_SUCCESS, postings })

export const postingsRequestFailure = error => ({ type: POSTINGS_FETCH_FAILURE, error })

export const postingsRequestGet = searchTerm => axios.get(`/api/postings?search=${searchTerm}`)

export const fetchPostings = (searchTerm = '') =>
  dispatch => {
    dispatch(postingsRequest());
    return postingsRequestGet(searchTerm)
      .then(response => {
        dispatch(postingsRequestSuccess(response.data))
      })
      .catch(error => {
        dispatch(postingsRequestFailure(error))
        console.log(error)
      })
  }



