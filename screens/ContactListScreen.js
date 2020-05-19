/* eslint-disable */
import React, {Component} from 'react'
import {Button, View, StyleSheet} from 'react-native'
import Constants from 'expo-constants'

import ContactsList from '../ContactsList'
// import store from '../redux/store'
import {connect} from 'react-redux'

import {changeFirstContact} from '../redux/actions'

// export default class ContactListScreen extends Component {
class ContactListScreen extends Component {
    static navigationOptions = ({navigation}) => ({
      headerTitle: 'Contacts',
      headerRight: (
        <Button title="Add" color="#a41034" onPress={() => {navigation.navigate('AddContact')}}
        />
      ),
    })

    state = { showContacts: true }

    toggleContats = () => {
        this.setState(prevState => ({ showContacts: !prevState.showContacts}))
    }

    showForm = () => {
        this.props.navigation.navigate('AddContact')
    }

    handleSelectContact = contact => {
        this.props.navigation.navigate('ContactDetails', {
            name: contact.name,
            phone: contact.phone
        })
    }
    render() {
        // const contacts = store.getState().contacts
        return (
            <View style={StyleSheet.container}>
                <Button title="toggle contacts" onPress={this.toggleContats}/>
                {/* <Button title="add contact" onPress={this.showForm}/> */}
                <Button title="change first contact" onPress={this.props.changeFirstContact}/>
                {this.state.showContacts && (
                    <ContactsList 
                        // contacts={this.props.screenProps.contacts}

                        // using redux
                        // contacts={contacts}

                        // using connect
                        contacts={this.props.contacts}
                        // onSelectContact={(contact) => {
                        //     this.props.navigation.navigate('ContactDetails', {
                        //         phone: contact.phone,
                        //         name: contact.name,
                        //     })
                        // }} 
                        onSelectContact={this.handleSelectContact}
                    />
                )}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts
})

export default connect(mapStateToProps, {changeFirstContact})(ContactListScreen)