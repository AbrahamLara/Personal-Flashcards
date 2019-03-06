import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { receiveDecks, removeDeck } from '../actions';
import { getDecks, removeEntry } from '../utils/api';
import Deck from './Deck';

class DecksList extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add Deck'
    }
  }
  // When component mounts it receives
  // all decks from _DATA, but is there is none
  // then it retreives fake data
  componentDidMount () {
    const { dispatch } = this.props;

    getDecks()
      .then(decks => dispatch(receiveDecks(decks)));
  }

  // Removes deck from state and AsynStorage
  handleDelete (key) {
    this.props.dispatch(removeDeck(key));
    removeEntry(key);
  }

  handlePress (key) {
    this.props.navigation.navigate('DeckView', {
      key,
      title: this.props.decks[key].title // This can be improved
    });
  }

  // Displays an alert to assure the user
  // of their decision to delete a deck
  handleLongPress (key) {
    Alert.alert(
      'Are you sure you want to delete this deck?',
      'This action cannot be undone',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          onPress: () => this.handleDelete(key),
          style: 'default'
        }
      ],
      {cancelable: true}
    );
  }

  // This needs to be an arrow function so that
  // 'this' is pointing to the DecksList class
  // and the Alert can be displayed
  renderItem = ({ item }) => {
    return (
      <Deck
        id={item.key}
        onLongPress={() => this.handleLongPress(item.key)}
        onPress={() => this.handlePress(item.key)}
      />
    );
  }

  // If the decks fetched from state does not exist
  // or has no decks then it will render a view
  // informing the user to create more
  render () {
    const decks = this.props.decks;
    const keys = Object.keys(decks);

    if (!decks || keys.length === 0) {
      return (
        <View style={styles.center}>
          <AntDesign name='exclamationcircleo' size={50} color='black' />
          <Text>Oh No! It seems you have no Deck of Flash Cards!</Text>
          <Text>Navigate to the next tab to create more</Text>
        </View>
      );
    }

    return (
      <FlatList
        style={{height: Dimensions.get('window').height}}
        data={keys.map((key) => ({key}))}
        renderItem={this.renderItem}
      />
    );
  }
}

// Fetches decks from state in redux store
function mapStateToProps (decks) {
  return {
    decks
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
export default connect(mapStateToProps)(DecksList);