import React from 'react'
import {Button} from 'react-native'

export default class PureButton extends React.PureComponent {
  state = {
    color: null,
  }

  componentDidUpdate() {
    this.setState({color: 'red'})
  }

  render() {
    const {title} = this.props
    return <Button {...this.props} color={this.state.color} />
    
    // for testing
    // return <Button title="increment count" color={this.state.color} />
  }
}
