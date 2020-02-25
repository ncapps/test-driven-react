const removePunctuation = (str) => str.replace(/[^\w\\s]|_s/g, '');

module.exports = (str) => {
  return [removePunctuation(str).toLowerCase()];
};
