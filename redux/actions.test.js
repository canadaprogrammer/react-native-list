/* global jest, expect, describe, it */
/* eslint-disable no-console */

import * as actions from './actions'

// test('updateUser returns an action', () => {
//   expect(actions.updateUser({name: 'test user'})).toEqual({
//     type: actions.UPDATE_USER,
//     payload: {name: 'test user'},
//   })
//   expect(actions.updateUser({phone: '0123456789'})).toMatchSnapshot()
// })

// test('updateUser returns an action when passed empty object', () => {
//   expect(actions.updateUser({})).toMatchSnapshot()
// })

// test('updateUser returns an action when passed empty name', () => {
//   expect(actions.updateUser({name: ''})).toMatchSnapshot()
// })

describe('updateUser returns actions', () => {
  it('returns an action', () => {
    expect(actions.updateUser({phone: '0123456789'})).toMatchSnapshot()
  })

  it('handles empty object', () => {
    expect(actions.updateUser({})).toMatchSnapshot()
  })

  it('handles empty name', () => {
    expect(actions.updateUser({name: ''})).toMatchSnapshot()
  })
})

describe('logInUser returns actions', () => {
  const fakeToken = 'thisIsATestToken'
  const errMessage = 'incorrect creds'
  const mockLogin = (username, password) => {
    if (username === 'u' && password === 'p') {
      return fakeToken
    }
    throw new Error(errMessage)
  }

  it('dispatches LOG_IN_SEMT', async () => {
    const mockDispatch = jest.fn()
    await actions.logInUser('', '')(mockDispatch)
    // mockDispatch.mock.calls, all the args that the mock fn was invoked
    // console.log(mockDispatch.mock.calls)
    expect(mockDispatch.mock.calls[0][0]).toEqual({type: actions.LOG_IN_SENT})
  })

  it('dispatches LOG_IN_FULFILLED with correct creds', async () => {
    const mockDispatch = jest.fn()

    await actions.logInUser('u', 'p', mockLogin)(mockDispatch)
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: actions.LOG_IN_FULFILLED,
      payload: fakeToken,
    })
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
  })

  it('dispatches LOG_IN_REJECTED with incorrect creds', async () => {
    const mockDispatch = jest.fn()

    await actions.logInUser('', '', mockLogin)(mockDispatch)
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: actions.LOG_IN_REJECTED,
      payload: errMessage,
    })
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
  })
})
