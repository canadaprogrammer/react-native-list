import React from 'react'
import { Text, SectionList } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = props => {
    const renderItem = ({item}) => <Row {...item} onSelectContact={props.onSelectContact}/>

    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],

        }
    }, {})

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter]
    }))
    return (
        <SectionList
            // renderItem={props.renderItem}
            // renderSectionHeader={props.renderSectionHeader}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            // sections={[{
            //     title: 'A',
            //     data: props.contacts
            // }]}
            sections={sections}
        />
    )
}


ContactsList.propTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array,
}
export default ContactsList