import React, {Component} from 'react'
import {Button, View, Text, StyleSheet} from 'react-native'
import {Ionicons} from 'react-native-vector-icons'

export default class SettingsScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
                name={`ios-options`}
                size={25}
                color={tintColor}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Setting coming soon</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        textAlign: 'center'
    }
})