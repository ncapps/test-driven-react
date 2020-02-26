const palindrome = require('../palindrome');
const { prepareStr, isPalindrome, stringStartPalindrome } = palindrome; 

describe('prepareStr()', () => {
  it('should convert the given string to lowercase', () => {
    expect(prepareStr('aAaA')).toBe('aaaa');
  });

  it('should remove all non-letter characters', () => {
    expect(prepareStr('To infinity, and beyond!')).toBe('toinfinityandbeyond');
  });
});

describe('isPalindrome()', () => {
  it('should return true when given a palindrome', () => {
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome('abba')).toBe(true);
  });

  it('should return false when given a non-palindrome', () => {
    expect(isPalindrome('abb')).toBe(false);
    expect(isPalindrome('aaba')).toBe(false);
  });
});

describe('stringStartPalindrome()', () => {
  it('should return the longest palindrome at the start of the string', () => {
    expect(stringStartPalindrome('wow')).toBe('wow');
    expect(stringStartPalindrome('ahha')).toBe('ahha');
    expect(stringStartPalindrome('hohoho')).toBe('hohoh');
  });

  it('should return null if no length 3+ palindrom starts the string', () => {
    expect(stringStartPalindrome('ww')).toBe(null);
    expect(stringStartPalindrome('abcda')).toBe(null);
    expect(stringStartPalindrome('bananarama')).toBe(null);
  });
});

describe('palindrome()', () => {
it('should correctly identify one-word palindromes', () => {
    expect(palindrome('madam')).toEqual(['madam']);
  });

  it('should return empty array when given no palindrome', () => {
    expect(palindrome('tic tac toe')).toEqual([]);
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
