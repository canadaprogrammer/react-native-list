import React from 'react'
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone)
            this.validateForm()
    }

    // handleNameChange = name => {
    //     // this.setState({name}, this.validateForm)
    //     this.setState({name})
    // }

    handlePhoneNumChange = phone => {
        // validation for phone number
        // +'number' return number
        // +'' return 0
        // +'number with string' or +'string' return NaN
        if (+phone >= 0 && phone.length <= 10) 
            // this.setState({phone}, this.validateForm)
            this.setState({phone})
    }

    // handle event by a handler
    // getHandler = key => {
    //     return val => {
    //         this.setState({[key]: val})
    //     }
    // }
    getHandler = key => val => this.setState({[key]: val})

    // handleNameChange = this.getHandler('name')  // val => {this.setState({name:val})}
    // handlePhoneChange = this.getHandler('phone')

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
            <KeyboardAvoidingView behavior="padding" style={styles.appContainer}>
                <TextInput 
                    style={styles.input} 
                    // onChangeText={this.handleNameChange} 
                    onChangeText={this.getHandler('name')}
                    value={this.state.name} 
                    placeholder="Name"
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handlePhoneNumChange} 
                    // onChangeText={this.getHandler('phone')}
                    value={this.state.phone} 
                    keyboardType="numeric"
                    placeholder="Phone"
                />
                <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
            </KeyboardAvoidingView>
        )
    }
}