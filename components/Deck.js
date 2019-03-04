import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { lightgray, gray } from '../utils/colors';

function Deck ({ title, questions, ...rest }) {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>
          {questions === 1
            ? '1 card'
            : questions+' cards'
          }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

// Retrives deck from state using given id
// to display information of deck
function mapStateToProps (decks, { id }) {
  const { title, questions } = decks[id];
  return {
    title,
    questions: questions.length
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: lightgray
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  questions: {
    fontSize: 15,
    color: gray
  }
});

export default connect(mapStateToProps)(Deck);