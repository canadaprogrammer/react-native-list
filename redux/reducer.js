/* eslint-disable import/order */
import {combineReducers} from 'redux'
import contacts from '../contacts'
import {
  UPDATE_CONTACT,
  UPDATE_USER,
  LOG_IN_FULFILLED,
  LOG_IN_REJECTED,
  CHANGE_FIRST_CONTACT,
} from './actions'

const marge = (prev, next) => ({...prev, ...next})

const contactReducer = (state = contacts, action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  if (action.type === CHANGE_FIRST_CONTACT) {
    const [firstContact, ...rest] = state
    if (!firstContact) return state
    const newContact = {...firstContact, name: 'Jin Park'}
    return [newContact, ...rest]
  }
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
