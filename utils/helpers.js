module.exports = {
  // Will make user input all caps if used
  capitalize: (str) => {
    if (str && typeof str === 'string') {
      return str.toUpperCase();
    }
  }
};
