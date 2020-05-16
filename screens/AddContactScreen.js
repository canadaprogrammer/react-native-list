import React, {Component} from 'react'
import AddContactForm from '../AddContactForm'
import store from '../redux/store'
import {addContact} from '../redux/actions'

export default class AddContactScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Add Contact',
    }
    handleSubmit = formState => {
        // this.props.screenProps.addContact(formState)

        store.dispatch(addContact({name: formState.name, phone: formState.phone}))
        this.props.navigation.navigate('ContactList')
    }

    render() {
        return <AddContactForm onSubmit={this.handleSubmit}/>
    }
}