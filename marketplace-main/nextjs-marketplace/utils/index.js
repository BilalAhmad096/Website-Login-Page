export const truncateWords = (str, maxWords) => {
  const wordsArray = str.split(' ')
  if (wordsArray.length > maxWords) {
    const truncated = wordsArray.slice(0, maxWords).join(' ')
    return `${truncated}...`
  }
  return str
}
