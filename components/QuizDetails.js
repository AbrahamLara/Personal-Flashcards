import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { gray, white, correct, incorrect } from '../utils/colors';
import TextButton from './TextButton';

class QuizDetails extends Component{
  constructor (props) {
    super(props);
    const questions = props.navigation.state.params.questions;

    this.state = {
      score: 0,
      ...questions[0],
      currentCard: 0,
      view: 'question',
      length: questions.length,
      gotWrong: []
    };
  }

  // Switches between displaying question
  // or answer when user decides to tap the
  // "view question" or "view answer" button
  changeView = () => {
    this.setState((currState) => ({
      view: currState.view === 'question' ? 'answer' : 'question'
    }))
  }

  // After clicking on "correct" or "incorrect"
  // the score will be incremented by one if correct,
  // the view will be switched to question for the next card,
  // currentCard will be the next card in the array, and
  // if the user got the question wrong the question will
  // be added to an array of questions the user got wrong
  // so that the user can see the questions they need more
  // practice on
  handleChoice (status) {
    const questions = this.props.navigation.state.params.questions;

    this.setState((currState) => ({
      score: status === 'correct' ? currState.score+1 : currState.score,
      currentCard: currState.currentCard+1,
      ...questions[currState.currentCard+1],
      view: 'question',
      gotWrong: status === 'correct'
        ? currState.gotWrong
        : currState.gotWrong.concat([questions[currState.currentCard].question])
    }));
  }

  render () {
    const { view, question, answer, score, currentCard, length, gotWrong } = this.state;

    if (currentCard === length) {
      return (
        <View style={styles.center}>
          <Text style={[styles.resultsText, {fontWeight: 'bold'}]}>
            { (100 * score / length).toFixed(0) }% correct!
          </Text>
          <Text style={styles.resultsText}>Questions you got incorrect:</Text>
          <View style={{marginTop: 20}}>
            {gotWrong.map((question, i) => (
              <Text style={{textAlign: 'center', fontSize: 20}} key={i}>{ i+1 }. { question }</Text>
            ))}
          </View>
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.currentPosition}>{ currentCard+1 }/{ length }</Text>
        { view === 'question'
          ? <Text style={styles.cardText}>{ question }</Text>
          : <Text style={styles.cardText}>{ answer }</Text>
        }
        <TextButton
          style={{marginBottom: 30}}
          onPress={this.changeView}
        >
          { view === 'question'
            ? 'view answer'
            : 'view question'
          }
        </TextButton>
        <View style={{marginLeft: 30, marginRight: 30}}>
          <TextButton
            onPress={() => this.handleChoice('correct')}
            textStyle={{fontWeight: 'bold'}}
            style={[styles.choiceBtn, {marginBottom: 10, backgroundColor: correct}]} textColor={white}
          >
            Correct
          </TextButton>
          <TextButton
            onPress={() => this.handleChoice('incorrect')}
            textStyle={{fontWeight: 'bold'}}
            style={[styles.choiceBtn, {backgroundColor: incorrect}]} textColor={white}
          >
            Incorrect
          </TextButton>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  resultsText: {
    fontSize: 35,
    textAlign: 'center'
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

export default QuizDetails;