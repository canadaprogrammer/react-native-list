/* eslint-disable import/order */
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PureButton from '../PureButton'

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
})

export default class PureButtonScreen extends React.Component {
  state = {
    count: 0,
  }

  inc = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <Text>{this.state.count}</Text>
        <PureButton
          title="increment count"
          style={styles.button}
          // any object (or array, function, etc.) literals in render(),
          // a new object will be created at each render
          // onPress={() => this.setState(prevState => ({count:prevState.count + 1}))}

          // fix above inefficiency
          onPress={this.inc}
        />
      </View>
    )
  }
}
