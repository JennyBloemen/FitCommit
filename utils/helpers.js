const { options } = require("../models/User");

module.exports = {
  // Will make user input all caps if used
  capitalize: (str) => {
    if (str && typeof str === 'string') {
      return str.toUpperCase();
    } 
  },

  if_equals: (a, b, options) => {
    if (a == b)  { return options.fn(this) }
    return options.inverse(this);
  },

  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },
};
