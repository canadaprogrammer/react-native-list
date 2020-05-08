import React, {Component} from 'react'
import AddContactForm from '../AddContactForm'

export default class AddContactScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Add Contact',
    }
    handleSubmit = formState => {
        this.props.screenProps.addContact(formState)
        this.props.navigation.navigate('ContactList')
    }

    render() {
        return <AddContactForm onSubmit={this.handleSubmit}/>
    }
}