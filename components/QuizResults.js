import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Score from './Score';
import TextButton from './TextButton';

export default function QuizResults ({ score, total, onClickRestart, onClickReturn }) {
  return (
    <View style={styles.center}>
      <Score score={score} total={total} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <TextButton
          onPress={onClickRestart}
          style={{flex: 1}}
        >
          Restart Quiz
        </TextButton>
        <TextButton
          onPress={onClickReturn}
          style={{flex: 1}}
        >
          Return to Deck
        </TextButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  }
});