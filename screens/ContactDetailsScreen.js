import React, {Component} from 'react'
import {Button, Text, View} from 'react-native'

export default class ContactDetailsScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.getParam('name')
    })
    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam('phone')}</Text>
                <Button title="Go to random number" onPress={this._goToRandom}/>
            </View>
        )
    }
    _goToRandom = () => {
        const contacts = this.props.screenProps.contacts
        const phone = this.props.navigation.getParam('phone')
        let randomContact
        while (!randomContact) {
            const randomIndex = Math.floor(Math.random() * contacts.length)
            if (contacts[randomIndex].phone !== phone) {
                randomContact = contacts[randomIndex]
            }
        }
        
        // switch navigation, back to contacts
        // this.props.navigation.navigate('ContactDetails', {
        
        // stack navigation, back to previous, contacts or randomContact
        this.props.navigation.push('ContactDetails', {
            name: randomContact.name,
            phone: randomContact.phone,
        })


    }
}
