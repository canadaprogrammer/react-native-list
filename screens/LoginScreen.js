/* eslint-disable import/order */
import React, {Component} from 'react'
import {Button, View, StyleSheet, TextInput, Text} from 'react-native'
// import {login} from '../api'
import {connect} from 'react-redux'
import {logInUser} from '../redux/actions'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
})

// export default class LoginScreen extends Component {
class LoginScreen extends Component {
  static propTypes = {
    err: PropTypes.string,
    token: PropTypes.string,
    logInUser: PropTypes.func,
  }

  state = {
    username: '',
    password: '',
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.navigation.navigate('Main')
    }
  }

  handleUsernameUpdate = (username) => {
    this.setState({username})
  }

  handlePasswordUpdate = (password) => {
    this.setState({password})
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
    // try {
    // const success = await login(this.state.username, this.state.password)
    this.props.logInUser(this.state.username, this.state.password)
    // this.props.navigation.navigate('Main')
    // } catch (err) {
    // const errMessage = err.message
    // this.setState({err: errMessage})
    // }
  }

  render() {
    const {username, password} = this.state
    const {err} = this.props
    const {_login} = this

    return (
      <View style={styles.container}>
        {/* <Text style={[styles.text, styles.error]}>{this.state.err}</Text> */}
        <Text style={[styles.text, styles.error]}>{err}</Text>
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={this.handleUsernameUpdate}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={this.handlePasswordUpdate}
          autoCapitalize="none"
          secureTextEntry
        />
        <Button title="Press to Log In" onPress={_login} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  err: state.user.loginErr,
  token: state.user.token,
})

export default connect(mapStateToProps, {logInUser})(LoginScreen)
