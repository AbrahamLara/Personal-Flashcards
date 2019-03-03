import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { blue, white } from '../utils/colors';

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

  render () {
    return (
      <KeyboardAvoidingView style={styles.center} behavior='padding'>
        <Text style={[styles.label, {marginBottom: 15}]}>
          What will you name your new deck?
        </Text>
        <TextInput
          style={[styles.input, {marginBottom: 15}]}
          placeholder='Tap here to begin typing!'
          onChangeText={this.handleText}
          value={this.state.value}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  label: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    width: Dimensions.get('window').width - 30,
    textAlign: 'center',
    fontSize: 30,
  },
  button: {
    width: Dimensions.get('window').width - 30,
    backgroundColor: blue,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    color: white,
    textAlign: 'center'
  }
});

export default AddDeck;