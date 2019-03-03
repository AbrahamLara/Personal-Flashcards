import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { decks } from '../utils/DATA';

class DecksList extends Component {
  render() {
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
 
export default DecksList;