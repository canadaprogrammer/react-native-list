import {createStore, applyMiddleware} from 'redux'
import {addContact} from './actions'
import reducer from './reducer'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import {AsyncStorage} from 'react-native' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

// const thunkMiddleware = store => next => action => {
//     if (typeof action === 'function') {
//         action(store.dispatch)
//     } else {
//         next(action)
//     }
// }

// const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'bax'}))

store.dispatch(addContact({name: 'Jin P', phone: '1231231234'}))
store.dispatch(addContact({name: 'David B', phone: '1231231234'}))
store.dispatch(addContact({name: 'Anderw E', phone: '1231231234'}))

console.log(store.getState())
*/