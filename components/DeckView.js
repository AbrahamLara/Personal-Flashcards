import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { gray, blue, white } from '../utils/colors';

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }

  render () {
    const { questions, navigation } = this.props;
    
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 50}}>
          <Text style={styles.headerTitle}>{navigation.state.params.title}</Text>
          <Text style={styles.headerDesc}>
            {questions.length === 1
              ? '1 card'
              : questions.length+' cards'
            }
          </Text>
        </View>
        <View>
          <TouchableOpacity style={[styles.addCardBtn, styles.button]}>
            <Text style={[styles.btnText, { color: blue }]}>
              Add Card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.startQuizBtn, styles.button]}>
            <Text style={[styles.btnText, { color: white }]}>
              Start Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps (decks, { navigation }) {
  return {
    questions: decks[navigation.state.params.key].questions
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 10
  },
  headerDesc: {
    textAlign: 'center',
    fontSize: 30,
    color: gray
  },
  addCardBtn: {
    borderWidth: 1,
    borderColor: blue,
    marginBottom: 10
  },
  startQuizBtn: {
    backgroundColor: blue,
  },
  btnText: {
    fontSize: 25,
    textAlign: 'center'
  },
  button: {
    width: Dimensions.get('window').width - 100,
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
  }
});

export default connect(mapStateToProps)(DeckView);