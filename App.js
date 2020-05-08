import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, FlatList,SectionList } from 'react-native'
import Constants from 'expo-constants'
// import {Constants} from 'expo'

// import contacts, {compareNames} from './contacts'
import {fetchUsers} from './api'

// import Row from './Row'
// import ContactsList from './ContactsList'
// import AddContactForm from './AddContactForm'
import {createStackNavigator, createSwitchNavigator, createTabNavigator} from 'react-navigation'
import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailsScreen from './screens/ContactDetailsScreen'
import LoginScreen from './screens/LoginScreen'
import SettingsScreen from './screens/SettingsScreen'
import {Ionicons} from 'react-native-vector-icons'

const ContactTab = createStackNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen,
  ContactDetails: ContactDetailsScreen,
}, {
  initialRouteName: 'ContactList',
  navigationOptions: {
    headerTintColor: '#a41034'
  }
})

ContactTab.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-contact${focused ? 's' : ''}`}
      size={25}
      color={tintColor}
    />
  )
}

const MainNavigator = createTabNavigator({
  Contacts: ContactTab,
  Settings: SettingsScreen,
}, {
  tabBarOptions: {
    activeTintColor: '#a41034'
  }
})

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
  Login: LoginScreen,
}, {
  initialRouteName: 'Login',
})
export default class App extends React.Component {
  state = {
    // showContacts: true,
    // showForm: false,
    // contacts: contacts
    contacts: null
  }

  addContact = newContact => {
    this.setState(prevState => ({showForm: false, contacts: [...prevState.contacts, newContact]}))
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    const results = await fetchUsers()
    this.setState({
      contacts: results
    })
  } 

  // toggleContacts = () => {
  //   this.setState(prevState => ({
  //     showContacts: !prevState.showContacts
  //   }))
  // }

  // toggleForm = () => {
  //   this.setState(prevState => ({
  //     showForm: !prevState.showForm
  //   }))
  // }
  // sort = () => {
  //   this.setState(prevState => ({
  //     contacts:  [...prevState.contacts].sort(compareNames)
  //   }))
  // }

  // key is automatically generated
  // item: { name: String, phone: String, key: number }
  // renderItem = obj => <Row name={obj.item.name} phone={obj.item.phone} key={obj.item.key} />
  // renderItem = obj => <Row {...(obj.item)} />

  // move it to ContactList.js for grouping
  // renderItem = ({item}) => <Row {...item} />
  // renderSectionHeader = obj => <Text>{obj.section.title}</Text>

  render() {
    return <AppNavigator 
              screenProps={{
                contacts: this.state.contacts,
                addContact: this.addContact,
              }}/>
    // if (this.state.showForm) return /* <AddContactForm onSubmit={this.addContact} /> */
    // return (
    //   <View style={styles.container}>
    //     <Button title="toggle contacts" onPress={this.toggleContacts} />
    //     {/* <Button title="sort" onPress={this.sort} /> */}
    //     <Button title="Add Contact" onPress={this.toggleForm} />
    //     {this.state.showContacts && 
    //       // using ScrollView
    //       // <ScrollView>
    //       //   {contacts.map(contact => 
    //       //     // <Row key={c.key} name={c.name} phone={c.phone} />
    //       //     <Row {...contact} />
    //       //   )} 
    //       // </ScrollView>

    //       // using FlatList
    //       // <FlatList
    //       //   renderItem={this.renderItem}
    //       //   data={this.state.contacts}
    //       // />

    //       // using SectionList
    //       // <SectionList
    //       //   renderItem={this.renderItem}
    //       //   renderSectionHeader={this.renderSectionHeader}
    //       //   sections={[{
    //       //     title: 'A',
    //       //     data: this.state.contacts
    //       //   }]}
    //       // />
    //       <ContactsList
    //         // moving it to ContactsList.js
    //         // renderItem={this.renderItem}
    //         // renderSectionHeader={this.renderSectionHeader}
    //         contacts={this.state.contacts}
    //       />
    //     }
        
    //   </View>
    // );
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
