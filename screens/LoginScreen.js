import React, {Component} from 'react'
import {Button, View, StyleSheet, TextInput, Text} from 'react-native'
import {login} from '../api'
export default class LoginScreen extends Component {
    state = {
        username: '',
        password: '',
        err: ''
    }

    handleUsernameUpdate = username => {
        this.setState({username})
    }

    handlePasswordUpdate = password => {
        this.setState({password})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.error]}>{this.state.err}</Text>
                <TextInput
                    placeholder="username"
                    value={this.state.username}
                    onChangeText={this.handleUsernameUpdate}
                    autoCapitalize="none"
                />
                <TextInput 
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={this.handlePasswordUpdate} 
                    autoCapitalize="none"
                    secureTextEntry
                />
                <Button title="Press to Log In" onPress={this._login}/>
            </View>
        )
    }

    // _login = () => {
    //     // console.log(this.state)
    //     fetch('http://192.168.1.146:8000', {
    //         method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify({username: this.state.username, password: this.state.password}),
    //     })
    //     .then(res => console.log(res))
    //     .catch(e => console.log(e))
    // }

    // move to api.js
    // _login = async () => {
    //     // this.props.navigation.navigate('Main')
    //     const response = await fetch('http://192.168.1.146:8000', {
    //         method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify({username: this.state.username, password: this.state.password}),
    //     })

    //     if (response.ok) {
    //         this.props.navigation.navigate('Main')
    //         return
    //     }

    //     const errMessage = await response.text()
    //     this.setState({err: errMessage})
    // }

    _login = async () => {
        try {
            const success = await login(this.state.username, this.state.password)
            this.props.navigation.navigate('Main')
        } catch (e) {
            const errMessage = e.message
            this.setState({err: errMessage})
        }
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    text: {
        textAlign: 'center'
    },
    error: {
        color: 'red'
    }
})