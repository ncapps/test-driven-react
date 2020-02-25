const palindrome = require('../palindrome');

describe('palindrome()', () => {
it('should correctly identify one-word palindromes', () => {
    expect(palindrome('madam')).toEqual(['madam']);
  });

it('should ignore casing', () => {
    expect(palindrome('WoW')).toEqual(['wow']);
  });

it('should ignore punctuation', () => {
    expect(palindrome('yo, banana boy!')).toEqual(['yobananaboy']);
  });

it('should detect multi-word palindroms', () => {
    expect(palindrome('A man, a plan, a canal, Panama')).toEqual([
      'amanaplanacanalpanama',
    ]);
  });
});
