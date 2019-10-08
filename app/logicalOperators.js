exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function (a, b) {
    if (!a && b || a && !b || a && b) {
      return true;
    } else {
      return false;
    }
  },

  and: function (a, b) {
    if ((!a && b) || (!a && !b) || (a && !b)) {
      return false;
    } else {
      return true;
    }
  }
};
