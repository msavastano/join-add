

const nativeJoin = Array.prototype.join
/**
 * Converts all elements in `array` into a string separated by `separator`.  Uses final separator with 'and'
 *
 * @param {Array} array The array to convert.
 * @param {string} [separator=','] The element separator.
 * @param {string} and If more that 2 items, element to join last two items.
 * @returns {string} Returns the joined string.
 * @example
 *
 * _.join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 *
 * _.join(['a', 'b', 'c'], '~', '=');
 * // => 'a~b=c'
 */
function join(array, separator, and) {
  const sep = separator === null ? ',' : separator
  if (array == null) {
    return ''
  } else if (and === null || and === undefined || array.length < 3) {
    return nativeJoin.call(array, sep);
  } else {
    var regex = RegExp(sep + '([^' + sep + ']*)$', 'g');
    return nativeJoin.call(array, sep).replace(regex, and + '$1');
  }
}

module.exports = join;
