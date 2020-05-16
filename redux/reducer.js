/* eslint-disable import/order */
import {combineReducers} from 'redux'
import {UPDATE_CONTACT, UPDATE_USER, LOG_IN_FULFILLED, LOG_IN_REJECTED} from './actions'

const marge = (prev, next) => ({...prev, ...next})

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  return state
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return marge(state, action.payload)
    case UPDATE_CONTACT:
      return marge(state, {prevContact: action.payload})
    case LOG_IN_FULFILLED:
      return marge(state, {token: action.payload})
    case LOG_IN_REJECTED:
      return marge(state, {loginErr: action.payload})
    default:
      return state
  }
}

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
})

export default reducer
