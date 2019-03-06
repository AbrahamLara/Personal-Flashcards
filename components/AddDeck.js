import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { blue, white } from '../utils/colors';
import { connect } from 'react-redux';
import { handleAddDeck } from '../actions';
import { submitEntry } from '../utils/api';
import SubmitButton from './SubmitButton';

class AddDeck extends Component {
  state = {
    value: ''
  }

  // Component will update everytime the user is
  // typing text in the input
  handleText = (value) => {
    this.setState({
      value
    });
  }

  // After successfully saving new deck and checking
  // that a previous deck does not already posses
  // the given value the user will be routed to
  // the DecksList tab
  handleSubmit = () => {
    const decks = this.props.decks;
    const value = this.state.value;

    if (value && !(decks.includes(value.replace(/\s+/g, '')))) {
      this.props.dispatch(handleAddDeck(value));

      this.setState({
        value: ''
      });

      submitEntry(value);

      this.toHome();
    }
  }

  // Switched from current tab to DecksList tab
  toHome () {
    this.props.navigation.navigate('DecksList');
  }

  render () {
    const value = this.state.value;

    return (
      <KeyboardAvoidingView style={styles.center} behavior='padding'>
        <Text style={[styles.label, {marginBottom: 15}]}>
          {this.props.decks.includes(value)
            ? 'A deck with that name already exists'
            : 'What will you name your new deck?'
          }
        </Text>
        <TextInput
          style={[styles.input, {marginBottom: 15}]}
          placeholder='Tap here to begin typing!'
          onChangeText={this.handleText}
          value={value}
        />
        <SubmitButton
          style={{borderRadius: 5}}
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginLeft: 30,
    marginRight: 30
  },
  label: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    textAlign: 'center',
    fontSize: 30,
  }
});

function mapStateToProps (decks) {
  return {
    decks: Object.keys(decks),
  }
}

export default connect(mapStateToProps)(AddDeck);