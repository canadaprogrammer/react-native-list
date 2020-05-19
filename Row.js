/* eslint-disable */

import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    row: {
        padding: 20,
    }
})

// const Row = props => (
//     <TouchableOpacity style={styles.row}  onPress={() => (
//         props.onSelectContact(props)
//     )}>
//       <Text>{props.name}</Text>
//       <Text>{props.phone}</Text>
//     </TouchableOpacity>
// )

// optimize performance by using PureComponent
// class Row extends React.PureComponent {

// optimize performance by using shouldComponentUpdate()
class Row extends React.Component {
    shouldComponentUpdate(nextProps) {
        // if (nextProps.name !== this.props.name) {
        //     return true
        // }
        // return false
        return nextProps.name !== this.props.name
    }
    render() {
        const {props} = this
        return (
            <TouchableOpacity style={styles.row}  onPress={() => (
                props.onSelectContact(props)
            )}>
              <Text>{props.name}</Text>
              <Text>{props.phone}</Text>
            </TouchableOpacity>
        )
    }
}

Row.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string
}
export default Row