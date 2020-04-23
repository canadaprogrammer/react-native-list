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
        isFormValid: false,
    }

    handleNameChange = name => {
        this.setState({name}, this.validateForm)
    }

    handlePhoneNumChange = phone => {
        // validation for phone number
        // +'number' return number
        // +'' return 0
        // +'number with string' or +'string' return NaN
        if (+phone >= 0 && phone.length <= 10) this.setState({phone}, this.validateForm)
    }

    validateForm = () => {
        if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3)
            return this.setState({isFormValid: true})
        else return this.setState({isFormValid: false})
    }
    handleSubmit = () => {
        // this.props.onSubmit({name:this.state.name, phone:this.state.phone})
        // this.props.onSubmit({...this.state})
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <View style={styles.appContainer}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handleNameChange} 
                    value={this.state.name} 
                    placeholder="Name"
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handlePhoneNumChange} 
                    value={this.state.phone} 
                    keyboardType="numeric"
                    placeholder="Phone"
                />
                <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
            </View>
        )
    }
}