/* global describe, it, expect */
/* eslint-disable import/order */

import reducer from './reducer'
import * as actions from './actions'

const DEFAULT_STATE = {
  user: {},
  contacts: [],
}

describe('contact reducer', () => {
  it('successfully adds new user', () => {
    expect(reducer(DEFAULT_STATE, actions.addContact({
          name: 'test user',
          phone: '0123456789',
        })
      )
    ).toMatchSnapshot()
  })
})

describe('user reducer', () => {
  it('successfully updates user', () => {
    expect(reducer(DEFAULT_STATE, actions.updateUser({
          name: 'test user',
    }))).toMatchSnapshot()
  })
})
