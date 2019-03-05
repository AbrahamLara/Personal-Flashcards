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

// Return an object formatted to represent
// a question in a deck's array of questions
export function formatCard (question, answer) {
  return {
    question,
    answer
  }
}