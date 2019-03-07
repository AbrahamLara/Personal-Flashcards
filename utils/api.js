import { AsyncStorage } from 'react-native';
import { _getDecks, DECKS_STORAGE_KEY } from "./_DATA";
import { formatDeck, formatCard } from './helpers';

// Gets results (data) from AsyncStorage using DECKS_STORAGE_KEY
// then fires the _Decks method which returns dummy data
// if the results are null, meaning no data was stored before,
// or whatever data was stored
export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(_getDecks);
}

// Adds a new deck to AsyncStorage
export function submitEntry (title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(formatDeck(title)));
}

// Retrieves results from AsyncStorage, gets a deck from given
// key and sets its value to undefined, then removes the property
// the object and new object is set in AsyncStorage 
export function removeEntry (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    })
}

export function submitCard ({ key, question, answer }) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      const deck = JSON.parse(results)[key];
      deck.questions = deck.questions.concat([formatCard(question, answer)]);

      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [key]: {
          ...deck,
        }
      }));
    });
}