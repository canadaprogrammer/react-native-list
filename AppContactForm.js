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
                <Button title="Submit" onPress={this.handleSubmit}/>
            </View>
        )
    }
}