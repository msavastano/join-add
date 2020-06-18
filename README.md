## Installation
```
npm install join-and
```
## Description
 - Join elements of array into a string with alternative final separator 
## Usage

```
const joinAnd = require('join-and')

joinAnd(array, ', ', ' and ') // => 'a, b and c'
joinAnd(array, ', ', 'and') // => 'a, bandc'
joinAnd(array, ', ', '') // => a, bc'
joinAnd(array, ', ', ' ') // => 'a, b c'
joinAnd(array, null) // => 'a,b,c'
joinAnd(array, null, ' and ') // => 'a,b and c'

// native join
joinAnd(array, '~') // => 'a~b~c'
joinAnd(array) // => 'a,b,c'

// less than 3 elements
joinAnd(['b', 'c'], ', ', ' and ') // => 'b, c'
```

## Params

 **array** {Array} The array to convert

 **separator** {string} The element separator.  Default or null ','

 ***and** {string} if more that 2 items, element to join last two items

### Returns

  {string} the joined string
