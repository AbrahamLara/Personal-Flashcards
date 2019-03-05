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

class AddCard extends Component {
  state = {
    questionInput: '',
    answerInput: ''
  }

  // As user types the value is updated
  // and set as input value
  handleChageText = (input, value) => {
    this.setState({
      [input]: value
    });
  }

  render () {
    const { questionInput, answerInput } = this.state;

    return (
      <KeyboardAvoidingView style={styles.center} behavior='padding'>
        <TextInput
          style={styles.input}
          placeholder='Question to add to deck'
          onChangeText={(value) => this.handleChageText('questionInput', value)}
          value={questionInput}
        />
        <TextInput
          style={styles.input}
          placeholder='Answer to question'
          onChangeText={(value) => this.handleChageText('answerInput', value)}
          value={answerInput}
        />
        <SubmitButton
          style={{borderRadius: 5}}
          onPress={() => console.log('hello')}
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