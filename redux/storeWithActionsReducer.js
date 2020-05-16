// import {createStore} from 'redux'
const {combineReducers, createStore} = require('redux')

const fetch = require('isomorphic-fetch')

const login = async (username, password) => {
    const response = await fetch('http://192.168.1.145:8000', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username, password}),
    })

    if (response.ok) {
        return true
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

// action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

// before importing redux
class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer,
        this.state = initialState
    }

    getState() {
        return this.state
    }

    dispatch(action) {
        if (typeof action === 'function') {
            action(this.dispatch.bind(this))
        } else {
            console.log('received an action: ', action.type)
            this.state = this.reducer(this.state, action)
        }
    }
}

const DEFAULT_STATE = {
    user: {},
    contacts: []
}

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state = [], action) => {
    if (action.type === UPDATE_CONTACT) return [...state, action.payload]
    return state
}

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return merge(state, action.payload)
        case UPDATE_CONTACT:
            return merge(state, {prevContact: action.payload})
        case 'LOG_IN_SUCCESS':
            return merge(state, {token: 'fakeToken'})
        default:
            return state
    }
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

// async action creator
const logInUser = (username, password) => dispatch => {
    dispatch({type: 'LOG_IN_SENT'})
    login(username, password)
        .then(() => {dispatch({type: 'LOG_IN_SUCCESS'})})
        .catch(err => {dispatch({type: 'LOG_IN_REJECTED'})})
}

const store = new Store(reducer, DEFAULT_STATE)
// const store = createStore(reducer)

store.dispatch(logInUser('username', 'password'))
/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'bax'}))

store.dispatch(addContact({name: 'Jin P', number: '1231231234'}))
store.dispatch(addContact({name: 'David B', number: '1231231234'}))
store.dispatch(addContact({name: 'Anderw E', number: '1231231234'}))
*/

console.log(store.getState())