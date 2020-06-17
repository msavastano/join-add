const join = require('./index')
const chai = require('chai');
const { expect } = chai;

describe('Join-and tests', () => {
  const array = ['a', 'b', 'c'];
  it('should return join all array elements into a string with "and"', () => {
    expect(join(array, ', ', ' and ')).to.equal('a, b and c')
    expect(join(array, ', ', 'and')).to.equal('a, bandc')
    expect(join(array, ', ', '')).to.equal('a, bc')
    expect(join(array, ', ', ' ')).to.equal('a, b c')
  })

  it('should return join all array elements into a string with native join', () => {
    expect(join(array, '~')).to.equal('a~b~c')
    expect(join(array)).to.equal('a,b,c')
  })

  it('should return join all array elements into a string with null separator', () => {
    expect(join(array, null)).to.equal('a,b,c')
    expect(join(array, null, ' and ')).to.equal('a,b and c')
  })

  it('should return join all array elements into a string with less than 3 elements', () => {
    const partial = array.slice(1)
    expect(join(partial, ', ', ' and ')).to.equal('b, c')
  })
})