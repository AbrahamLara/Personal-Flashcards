// Actions events to determine how decks in state
// will be updated.
export const RECEIVE_DECKS = 'RECEIVE_DECKS'; // This is before AsynStorage is used
export const SAVE_DECK = 'SAVE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

// This functions takes in decks to update state
// in redux store
export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

// This functions takes in a formatted deck
// object that will be added to state in
// redux store
export function saveDeck (deck) {
  return {
    type: SAVE_DECK,
    deck,
  }
}

// This functions takes in a key of a deck
// to be removed from state in redux store
export function removeDeck (key) {
  return {
    type: REMOVE_DECK,
    key,
  }
}