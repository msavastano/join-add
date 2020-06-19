

const nativeJoin = Array.prototype.join
/**
 * Converts all elements in `array` into a string separated by `separator`.  Uses final separator with 'and'
 *
 * @param {Array} array The array to convert.
 * @param {string} [separator=','] The element separator.
 * @param {string} and element to join last two items.
 * @param {boolean} [useTwoItemAnd=true] if 2 items and true, use and separator
 * @returns {string} Returns the joined string.
 * @example
 *
 * join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 *
 * join(['a', 'b', 'c'], '~', '=');
 * // => 'a~b=c'
 */
function joinAnd(array, separator, and, useTwoItemAnd = true) {
  const sep = separator === null ? ',' : separator
  if (array == null) {
    return ''
  } else if (and === null || and === undefined || (array.length < 3 && !useTwoItemAnd)) {
    return nativeJoin.call(array, sep);
  } else {
    var regex = RegExp(sep + '([^' + sep + ']*)$', 'g');
    return nativeJoin.call(array, sep).replace(regex, and + '$1');
  }
}

module.exports = joinAnd;
