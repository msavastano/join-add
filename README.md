
## Description
 - Join elements of array into a string with alternative final separator 
## Usage

```
const joinAnd = require('join-and')

joinAnd(['a', 'b', 'c'], ', ', ' and ') // => 'a, b and c'
joinAnd(['a', 'b', 'c'], ', ', 'and') // => 'a, bandc'
joinAnd(['a', 'b', 'c'], ', ', '') // => a, bc'
joinAnd(['a', 'b', 'c'], ', ', ' ') // => 'a, b c'
joinAnd(['a', 'b', 'c'], null) // => 'a,b,c'
joinAnd(['a', 'b', 'c'], null, ' and ') // => 'a,b and c'

// native join
joinAnd(['a', 'b', 'c'], '~') // => 'a~b~c'
joinAnd(['a', 'b', 'c']) // => 'a,b,c'

// less than 3 elements
joinAnd(['b', 'c'], ', ', ' and ') // => 'b, c'
joinAnd(['b', 'c'], ', ', ' and ', true) // =>'b and c'
joinAnd(['b', 'c'], ', ', ' and ', false) // =>'b, c'
joinAnd(['b', 'c'], ', ') // => 'b, c'
joinAnd(['b', 'c'], ', ', null, false) // =>'b, c'
joinAnd(['b', 'c'], ', ', null) // => 'b, c'
```

## Params

 **array** {Array} The array to convert

 **separator** {string} The element separator.  Default or null = ','

 **and** {string} Element to join last two items

 **useTwoItemAnd** {boolean} If 2 items and true, use 'and' separator.  Default = true

### Returns

  {string} the joined string
