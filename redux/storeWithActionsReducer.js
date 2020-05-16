// import {createStore} from 'redux'
const {combineReducers, createStore} = require('redux')

// action type
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

const marge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state = [], action) => {
    if (action.type === UPDATE_CONTACT) return [...state, action.payload]
    return state
}

const userReducer = (state = {}, action) => {
    if (action.type === UPDATE_USER) return marge(state, action.payload)
    if (action.type === UPDATE_CONTACT) return marge(state, {prevContact: action.payload})
    return state
}

// const reducer = (state, action) => ({
//     user: userReducer(state.user, action),
//     contacts: contactReducer(state.contacts, action)
// })

// using combineReducers
const reducer = combineReducers({
    user: userReducer,
    contacts: contactReducer
})

// action creators
const updateUser = update => ({
    type: UPDATE_USER,
    payload: update
})

const addContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})

const store = createStore(reducer)

store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'bax'}))

store.dispatch(addContact({name: 'Jin P', number: '1231231234'}))
store.dispatch(addContact({name: 'David B', number: '1231231234'}))
store.dispatch(addContact({name: 'Anderw E', number: '1231231234'}))

console.log(store.getState())