/* global expect, isPalindromic */

describe('isPalindromic(string)', function () {
  beforeEach(function () {
    expect(isPalindromic).to.be.a('function');
  });

  it('returns true for "bob"', function () {
    const input = 'bob';
    const output = isPalindromic(input);
    expect(output).to.equal(true);
  });

  it('returns false for "alice"', function () {
    const input = 'alice';
    const output = isPalindromic(input);
    expect(output).to.equal(false);
  });

  it('returns true for "racecar"', function () {
    const input = 'racecar';
    const output = isPalindromic(input);
    expect(output).to.equal(true);
  });

  it('returns false for "rasecar"', function () {
    const input = 'rasecar';
    const output = isPalindromic(input);
    expect(output).to.equal(false);
  });

  it('returns true for "taco cat"', function () {
    const input = 'taco cat';
    const output = isPalindromic(input);
    expect(output).to.equal(true);
  });

  it('returns false for "sam i am"', function () {
    const input = 'sam i am';
    const output = isPalindromic(input);
    expect(output).to.equal(false);
  });
});
