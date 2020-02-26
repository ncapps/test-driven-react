const prepareStr = (str) => str.toLowerCase().replace(/[^a-z]/g, '');

const isPalindrome = (str) => {
  const reverse = str.split('').reverse().join('');
  return reverse === str;
};

const stringStartPalindrome = (str) => {
  const firstLetter = str[0];
  let lastIndex = str.lastIndexOf(firstLetter);
  while (lastIndex >= 2) {
    const candidate = str.substring(0, lastIndex + 1);
    if(isPalindrome(candidate)) {
      return candidate;
    }
    lastIndex = str.lastIndexOf(firstLetter, lastIndex - 1);
  }
  return null;
};

const palindrome = (str) => {
  const matches = [];
  let startIndex = 0;
  str = prepareStr(str);
  while(startIndex < str.length / 2) {
    const palindrome = stringStartPalindrome(str.substring(startIndex));
    if(palindrome) {
      matches.push(palindrome);
      startIndex += palindrome.length;
    } else {
      startIndex += 1;
    }
  }
  return matches;
};

palindrome.prepareStr = prepareStr;
palindrome.isPalindrome = isPalindrome;
palindrome.stringStartPalindrome = stringStartPalindrome;

module.exports = palindrome;
