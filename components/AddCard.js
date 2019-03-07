import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { blue } from '../utils/colors';
import { handleAddCardToDeck } from '../actions';
import { submitCard } from '../utils/api';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  // As user types the value is updated
  // and set as input value
  handleChageText = (input, value) => {
    this.setState({
      [input]: value
    });
  }

  handleSubmit = () => {
    const { question, answer } = this.state;

    if (question && answer) {
      const key = this.props.navigation.state.params.key;

      this.props.dispatch(handleAddCardToDeck({
        key,
        question,
        answer
      }));

      this.setState({
        question: '',
        answer: ''
      });

      submitCard({
        key,
        question,
        answer
      });
    }
  }

  render () {
    const { question, answer } = this.state;

    return (
      <KeyboardAvoidingView style={styles.center} behavior='padding'>
        <TextInput
          style={styles.input}
          placeholder='Question to add to deck'
          onChangeText={(value) => this.handleChageText('question', value)}
          value={question}
        />
        <TextInput
          style={styles.input}
          placeholder='Answer to question'
          onChangeText={(value) => this.handleChageText('answer', value)}
          value={answer}
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
  input: {
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: blue,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
});

export default connect()(AddCard);