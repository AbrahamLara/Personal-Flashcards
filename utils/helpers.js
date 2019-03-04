export function formatDeck (title) {
  return {
    [title.replace(/\s+/g, '')]: {
      title,
      questions: []
    }
  }
}