import { AsyncStorage } from 'react-native';
import { _getDecks, DECKS_STORAGE_KEY } from "./_DATA";

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(_getDecks);
}

export function submitEntry (deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}

export function removeEntry(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    })
}