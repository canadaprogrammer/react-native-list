import React, {Component} from 'react'
import {Button, View, StyleSheet} from 'react-native'
import Constants from 'expo-constants'

import ContactsList from '../ContactsList'

export default class ContactListScreen extends Component {
    static navigationOptions = ({navigation}) => ({
      headerTitle: 'Contacts',
      headerRight: (
        <Button title="Add" onPress={() => {navigation.navigate('AddContact')}}
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

    render() {
        return (
            <View style={StyleSheet.container}>
                <Button title="toggle contacts" onPress={this.toggleContats}/>
                <Button title="add contact" onPress={this.showForm}/>
                {this.state.showContacts && (
                    <ContactsList 
                        contacts={this.props.screenProps.contacts}
                        onSelectContact={(contact) => {
                            this.props.navigation.navigate('ContactDetails', {
                                phone: contact.phone,
                                name: contact.name,
                            })
                        }} 
                    />
                )}
            </View>
        )
    }
}