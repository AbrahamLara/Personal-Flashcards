import React from 'react';
import { StyleSheet } from 'react-native';
import TextButton from './TextButton';
import { white, blue } from '../utils/colors';

export default function SubmitButton ({ style, ...rest }) {
  return (
    <TextButton
      style={[styles.button, style || {}]} {...rest}
      textColor={white}
    >
      Submit
    </TextButton>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: blue
  }
});