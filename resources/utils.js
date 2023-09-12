export { appendBaseURL }
export { randFromArray }

function appendBaseURL(absoluteURL) {
  if (!absoluteURL.startsWith('/')) throw new Error('URL should start with /')

  return normalize(import.meta.env.BASE_URL + absoluteURL)
}

// Randomly select an element from a given array
function randFromArray(array) {
  return array[(Math.random() * array.length) >> 0]
}

function normalize(url) {
  return '/' + url.split('/').filter(Boolean).join('/')
}
