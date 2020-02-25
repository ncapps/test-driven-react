const palindrome = require('./palindrome');

describe('palindrome()', () => {
  it('should correctly identify one-word palindromes', () => {
    expect(palindrome('madam')).toEqual(['madam']);
  });
});
