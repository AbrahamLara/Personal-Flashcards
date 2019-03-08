import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { white, incorrect, correct, gray } from '../utils/colors';
import TextButton from './TextButton';

export default function Quiz ({ view, index, total, question, answer, onClickViewChange, onClickCorrect, onClickIncorrect }) {

  return (
    <SafeAreaView style={styles.center}>
      <Text style={styles.currentPosition}>{ index+1 }/{ total }</Text>
      { view === 'question'
        ? <Text style={styles.cardText}>{ question }</Text>
        : <Text style={styles.cardText}>{ answer }</Text>
      }
      <TextButton
        style={{marginBottom: 30}}
        onPress={onClickViewChange}
      >
        { view === 'question'
          ? 'view answer'
          : 'view question'
        }
      </TextButton>
      <View style={{marginLeft: 30, marginRight: 30}}>
        <TextButton
          onPress={onClickCorrect}
          textStyle={{fontWeight: 'bold'}}
          style={[styles.choiceBtn, { marginBottom: 10, backgroundColor: correct }]} textColor={white}
        >
          Correct
        </TextButton>
        <TextButton
          onPress={onClickIncorrect}
          textStyle={{fontWeight: 'bold'}}
          style={[styles.choiceBtn, { backgroundColor: incorrect }]} textColor={white}
        >
          Incorrect
        </TextButton>
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  currentPosition: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 25,
    color: gray
  },
  cardText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  choiceBtn: {
    fontSize: 25,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20
  }
});