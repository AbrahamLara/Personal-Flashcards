// Return an object formatted to represent
// a deck and removes whitespaces to make key
export function formatDeck (title) {
  return {
    [title.replace(/\s+/g, '')]: {
      title,
      questions: []
    }
  }
}