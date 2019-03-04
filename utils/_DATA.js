import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'PersonalFlashCards:decks'

// Decks dataset to start off with
export let decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function _getDummyData () {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
  return decks;
}

export function _getDecks (results) {
  return results === null
    ? _getDummyData()
    : JSON.parse(results);
}