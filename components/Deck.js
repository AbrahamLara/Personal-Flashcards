import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { lightgray, gray } from '../utils/colors';

class Deck extends Component {
  render() {
    const { title, questions } = this.props;
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {questions === 1
          ? <Text style={styles.questions}>{questions} card</Text>
          : <Text style={styles.questions}>{questions} cards</Text>
        }
      </View>
    );
  }
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