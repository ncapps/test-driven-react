const prepareStr = (str) => str.toLowerCase().replace(/[^a-z]/g, '');

const isPalindrome = (str) => str.split;

const stringStartPalindrome = (str) => {
  const reverse = str.slice().split().reverse().join('');
  return reverse === str;
};

const palindrome = (str) => str;

palindrome.prepareStr = prepareStr;
palindrome.isPalindrome = isPalindrome;
palindrome.stringStartPalindrome = stringStartPalindrome;

module.exports = palindrome;
