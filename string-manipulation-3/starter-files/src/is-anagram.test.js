/* global expect, isAnagram */

describe('isAnagram(firstString, secondString)', function () {
  beforeEach(function () {
    expect(isAnagram).to.be.a('function');
  });

  it('returns true for "restful" and "fluster"', function () {
    const result = isAnagram('restful', 'fluster');
    expect(result).to.equal(true);
  });

  it('returns true for "dormitory" and "dirty room"', function () {
    const result = isAnagram('dormitory', 'dirty room');
    expect(result).to.equal(true);
  });

  it('returns false for "roses" and "horse"', function () {
    const result = isAnagram('roses', 'horse');
    expect(result).to.equal(false);
  });

  it('returns true for "debit card" and "bad credit"', function () {
    const result = isAnagram('debit card', 'bad credit');
    expect(result).to.equal(true);
  });

  it('returns false for "nearby there" and "nearly three"', function () {
    const result = isAnagram('nearby there', 'nearly three');
    expect(result).to.equal(false);
  });

  it('returns true for "school master" and "the classroom"', function () {
    const result = isAnagram('school master', 'the classroom');
    expect(result).to.equal(true);
  });

  it('returns false for "ludicrous" and "ridiculous"', function () {
    const result = isAnagram('ludicrous', 'ridiculous');
    expect(result).to.equal(false);
  });

  it('returns true for "anagram" and "nag a ram"', function () {
    const result = isAnagram('anagram', 'nag a ram');
    expect(result).to.equal(true);
  });

  it('returns false for "red dad" and "rad ede"', function () {
    const result = isAnagram('red dad', 'rad ede');
    expect(result).to.equal(false);
  });

  it('returns false for "programmer" and "poor gamer"', function () {
    const result = isAnagram('programmer', 'poor gamer');
    expect(result).to.equal(false);
  });
});
