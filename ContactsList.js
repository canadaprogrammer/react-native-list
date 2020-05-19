/* eslint-disable */
import React from 'react'
import { Text, SectionList, FlatList } from 'react-native'
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

    // sort order
    // const data =[]

    // const num_sections = sections.length

    // for (let i = 0; i < num_sections; i++) {
    //     let num_contactsByLetter = sections[i].data.length
    //     for (let j = 0; j < num_contactsByLetter; j++) {
    //         let contact = sections[i].data[j];
    //         data.push({name: contact.name, phone: contact.phone})
    //     }
    // }

    // console.log(sections, data)

    return (
        // <SectionList
        //     keyExtractor={item => item.phone}
        //     // renderItem={props.renderItem}
        //     // renderSectionHeader={props.renderSectionHeader}
        //     renderItem={renderItem}
        //     renderSectionHeader={renderSectionHeader}
        //     // sections={[{
        //     //     title: 'A',
        //     //     data: props.contacts
        //     // }]}
        //     sections={sections}
        // />

        // optimize performance
        <FlatList
            keyExtractor={item => item.phone}
            // data={data}
            data={props.contacts}
            renderItem={renderItem}
        />
    )
}


ContactsList.propTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array,
}
export default ContactsList