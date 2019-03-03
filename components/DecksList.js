import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';

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
    const { decks } = this.props;

    return (
      <View>
        {Object.keys(decks).map(deck => (
          <View key={deck}>
            <Text>{decks[deck].title}</Text>
            {decks[deck].questions.length === 1
              ? <Text>{decks[deck].questions.length} card</Text>
              : <Text>{decks[deck].questions.length} cards</Text>
            }
          </View>
        ))}
      </View>
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