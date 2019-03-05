import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK } from "../actions";

// Reducer for decks to determine what action event will
// update state in redux store
export default function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case REMOVE_DECK:
      const data = state;
      data[action.key] = undefined;
      delete data[action.key];
      
      return {
        ...state
      };
    default:
      return state;
  }
}