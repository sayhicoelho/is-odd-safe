module.exports = function isOdd(n) {
  if (typeof n !== 'string') {
    throw new Error('The value must be a string')
  } else if (n.match(/\D/gi)) {
    throw new Error('The value must have only digits')
  }

  return Number(String(n).split('').pop())
    % 2 !== 0
}
