import {createStore, applyMiddleware} from 'redux'
import {addContact} from './actions'
import reducer from './reducer'
import thunk from 'redux-thunk'
import contacts from '../contacts'

// const thunkMiddleware = store => next => action => {
//     if (typeof action === 'function') {
//         action(store.dispatch)
//     } else {
//         next(action)
//     }
// }

// const store = createStore(reducer, applyMiddleware(thunkMiddleware))
const store = createStore(reducer, applyMiddleware(thunk))

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'bax'}))

store.dispatch(addContact({name: 'Jin P', phone: '1231231234'}))
store.dispatch(addContact({name: 'David B', phone: '1231231234'}))
store.dispatch(addContact({name: 'Anderw E', phone: '1231231234'}))

*/

const num_contacts = contacts.length

for (let i = 0; i < num_contacts; i++) {
    store.dispatch(addContact({name: contacts[i].name, phone:contacts[i].phone}))
}


console.log(store.getState())

export default store