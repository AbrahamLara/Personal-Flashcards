import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';
import Deck from './Deck';

class DecksList extends Component {
  // When component mounts it receives
  // all decks from _DATA, but is there is none
  // then it retreives fake data
  componentDidMount() {
    const { dispatch } = this.props;

    getDecks()
      .then(decks => dispatch(receiveDecks(decks)));
  }

  render() {
    return (
      <FlatList
        data={Object.keys(this.props.decks).map((key) => ({key}))}
        renderItem={({ item }) => <Deck id={item.key} />}
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
 
export default connect(mapStateToProps)(DecksList);