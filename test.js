const joinAnd = require('./index')
const chai = require('chai');
const { expect } = chai;

describe('Join-and tests', () => {
  const array = ['a', 'b', 'c'];
  it('should return join all array elements into a string with "and"', () => {
    expect(joinAnd(array, ', ', ' and ')).to.equal('a, b and c')
    expect(joinAnd(array, ', ', ' and ', false)).to.equal('a, b and c')
    expect(joinAnd(array, ', ', 'and')).to.equal('a, bandc')
    expect(joinAnd(array, ', ', '')).to.equal('a, bc')
    expect(joinAnd(array, ', ', ' ')).to.equal('a, b c')
    expect(joinAnd(array, ', ', null)).to.equal('a, b, c')
    expect(joinAnd(array, null, null)).to.equal('a,b,c')
  })

  it('should return join all array elements into a string with native join', () => {
    expect(joinAnd(array, '~')).to.equal('a~b~c')
    expect(joinAnd(array)).to.equal('a,b,c')
  })

  it('should return join all array elements into a string with null separator', () => {
    expect(joinAnd(array, null)).to.equal('a,b,c')
    expect(joinAnd(array, null, ' and ')).to.equal('a,b and c')
  })

  it('should return join all array elements into a string with less than 3 elements', () => {
    const partial = array.slice(1)
    expect(joinAnd(partial, ', ', ' and ')).to.equal('b and c')
    expect(joinAnd(partial, ', ', ' and ', true)).to.equal('b and c')
    expect(joinAnd(partial, ', ', ' and ', false)).to.equal('b, c')
    expect(joinAnd(partial, ', ')).to.equal('b, c')
    expect(joinAnd(partial, ', ', null, false)).to.equal('b, c')
    expect(joinAnd(partial, ', ', null)).to.equal('b, c')
  })

  it('should return join all array elements into a string on different array cases', () => {
    expect(joinAnd([null], ', ', ' and ', false)).to.equal('')
    expect(joinAnd(['a'], ', ', ' and ')).to.equal('a')
    expect(joinAnd(null, ', ', ' and ')).to.equal('')
    expect(joinAnd(undefined, ', ', ' and ', false)).to.equal('')
    expect(joinAnd([undefined], ', ', ' and ')).to.equal('')
  })
})