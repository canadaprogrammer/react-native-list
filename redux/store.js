import {createStore} from 'redux'
import {addContact} from './actions'
import reducer from './reducer'

const store = createStore(reducer)

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'bax'}))

*/
store.dispatch(addContact({name: 'Jin P', phone: '1231231234'}))
store.dispatch(addContact({name: 'David B', phone: '1231231234'}))
store.dispatch(addContact({name: 'Anderw E', phone: '1231231234'}))

console.log(store.getState())

export default store