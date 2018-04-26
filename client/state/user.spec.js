/* global describe beforeEach afterEach it */

import { expect } from 'chai'
import { loadPostings, loadCurrentPosting } from './postings'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('dispatching actions', () => {
  let store
  let mockAxios

  const initialState = { postings: {} }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('postings', () => {
    describe('GET_POSTINGS action', () => {
      it('eventually dispatches the GET POSTINGS action', () => {
        let fakePosting = { title: 'consultant needed' }
        mockAxios.onGet('/api/postings').replyOnce(200, fakePosting)
        return store.dispatch(loadPostings())
          .then(() => {
            const actions = store.getActions()
            expect(actions[0]).to.be.an('object')
            expect(actions[0].type).to.be.equal('GET_POSTINGS')
            expect(actions[0].postings).to.be.deep.equal(fakePosting)
          })
      })
    })
    describe('GET_CURRENT_POSTING action', () => {
      it('eventually dispatches the GET CURRENT POSTING action', () => {
        let fakePosting = '123';
        let postingId = '123';
        store.dispatch(loadCurrentPosting(postingId));
        const actions = store.getActions();
        expect(actions[0]).to.be.an('object')
        expect(actions[0].type).to.be.equal('GET_CURRENT_POSTING')
        expect(actions[0].postingId).to.be.equal(fakePosting);
      })
    })
  })
})


  // describe('logout', () => {
  //   it('logout: eventually dispatches the REMOVE_USER action', () => {
  //     mockAxios.onPost('/auth/logout').replyOnce(204)
  //     return store.dispatch(logout())
  //       .then(() => {
  //         const actions = store.getActions()
  //         expect(actions[0].type).to.be.equal('REMOVE_USER')
  //         expect(history.location.pathname).to.be.equal('/login')
  //       })
  //   })
  // })

