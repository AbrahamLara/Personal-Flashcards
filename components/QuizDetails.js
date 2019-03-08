import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { gray, white, correct, incorrect } from '../utils/colors';
import TextButton from './TextButton';
import QuizResults from './QuizResults';
import Quiz from './Quiz';

class QuizDetails extends Component{
  constructor (props) {
    super(props);
    const questions = props.navigation.state.params.questions;

    this.state = {
      score: 0,
      ...questions[0],
      currentCard: 0,
      view: 'question',
      length: questions.length
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
  // practice on. If they have answered the last question then
  // local notification gets cleared and sets a new one for tomorrow
  handleChoice (status) {
    const questions = this.props.navigation.state.params.questions;

    this.setState((currState) => {
      const { score, currentCard, gotWrong, length } = currState;
        
      return {
        score: status === 'correct' ? score+1 : score,
        currentCard: currentCard+1,
        ...questions[currentCard+1],
        view: 'question'
      }
    });
  }

  // Restarts quiz to first card in deck once user
  // decides to restart their quiz
  restartQuiz = () => {
    const questions = this.props.navigation.state.params.questions;

    this.setState({
      score: 0,
      ...questions[0],
      currentCard: 0,
      view: 'question'
    });
  }

  render () {
    const { view, question, answer, score, currentCard, length } = this.state;

    if (currentCard === length) {
      const { title, key } = this.props.navigation.state.params;

      return (
        <QuizResults
          score={score}
          total={length}
          onClickRestart={this.restartQuiz}
          onClickReturn={() =>
            this.props.navigation.navigate('DeckView', { title, key})
          }
        />
      );
    }

    return (
      <Quiz
        view={view}
        question={question}
        answer={answer}
        score={score}
        index={currentCard}
        total={length}
        onClickViewChange={this.changeView}
        onClickCorrect={() => this.handleChoice('correct')}
        onClickIncorrect={() => this.handleChoice('incorrect')}
      />
    );
  }
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

export default QuizDetails;