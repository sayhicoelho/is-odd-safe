# is-odd-safe
is-odd-safe is a function to check whether an integer or bigint is odd using String instead of Number.

## Usage
```js
const isOdd = require('is-odd')

console.log(isOdd('0')) // false
console.log(isOdd('1')) // true
console.log(isOdd('999')) // true
console.log(isOdd('9007199254740993')) // true
console.log(isOdd('18014398509481986')) // false
```

## License
MIT
