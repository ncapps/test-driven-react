const hasMultipleOfThree = (num) => (num % 3 === 0);

const hasMultipleOfFive = (num) => (num % 5 === 0);

const hasMultipleOfThreeAndFive = (num) => (hasMultipleOfThree(num) && hasMultipleOfFive(num));

export default function fizzBuzz(num) {
  if (hasMultipleOfThreeAndFive(num)) return 'FizzBuzz';
  if (hasMultipleOfThree(num)) return 'Fizz';
  if (hasMultipleOfFive(num)) return 'Buzz';
  return `${num}`;
}
