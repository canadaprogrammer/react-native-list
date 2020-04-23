import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: Constants.statusBarHeight
    },
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
})

export default class AppContactForm extends React.Component {
    static propTypes = {
        addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: '',
    }

    handleNameChange = name => {
        this.setState({name})
    }

    handlePhoneNumChange = phone => {
        this.setState({phone})
    }
    render() {
        return (
            <View style={styles.appContainer}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handleNameChange} 
                    value={this.state.name} 
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handlePhoneNumChange} 
                    value={this.state.phone} 
                    keyboardType="numeric"
                />
                <Button title="Add Contact" />
            </View>
        )
    }
}