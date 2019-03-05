import { formatDeck, formatCard } from "../utils/helpers";

// Actions events to determine how decks in state
// will be updated.
export const RECEIVE_DECKS = 'RECEIVE_DECKS'; // This is before AsynStorage is used
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';

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
function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

// This function formats the data before
// new deck is saved
export function handleAddDeck (title) {
  return addDeck(formatDeck(title));
}

// This functions takes in a key of a deck
// to be removed from state in redux store
export function removeDeck (key) {
  return {
    type: REMOVE_DECK,
    key,
  }
}

function addCardToDeck (card) {
  return {
    type,
    card
  }
}

function handleAddCardToDeck (key, question, answer) {
  return {
    ...addCardToDeck(formatCard(question, answer)),
    key
  }
}