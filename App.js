import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList,SectionList } from 'react-native';
import Constants from 'expo-constants';

import contacts, {compareNames} from './contacts';
import Row from './Row';

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts
  }

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts:  [...prevState.contacts].sort(compareNames)
    }))
  }

  // key is automatically generated
  // item: { name: String, phone: String, key: number }
  // renderItem = obj => <Row name={obj.item.name} phone={obj.item.phone} key={obj.item.key} />
  // renderItem = obj => <Row {...(obj.item)} />
  renderItem = ({item}) => <Row {...item} />
  renderSectionHeader = obj => <Text>{obj.section.title}</Text>

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts && (
          // using ScrollView
          // <ScrollView>
          //   {contacts.map(contact => 
          //     // <Row key={c.key} name={c.name} phone={c.phone} />
          //     <Row {...contact} />
          //   )}
          // </ScrollView>

          // using FlatList
          // <FlatList
          //   renderItem={this.renderItem}
          //   data={this.state.contacts}
          // />

          // using SectionList
          <SectionList
            renderItem={this.renderItem}
            renderSectionHeader={this.renderSectionHeader}
            sections={[{
              title: 'A',
              data: this.state.contacts
            }]}
          />
        )}
        
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
