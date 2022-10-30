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

  ifCond: (v1, v2, options) => {
    if (v1 == v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  
};
