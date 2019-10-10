exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {
    let a = /[0-9]/g
    return a.test(str)
  },

  containsRepeatingLetter: function (str) {
    var hasDuplicates = (/([a-zA-Z]).*\1/).test(str)
    return hasDuplicates
  },

  endsWithVowel: function (str) {
    let vowel = /[aeiouAEIOU]\b/g
    return vowel.test(str)
  },

  captureThreeNumbers: function (str) {
    let vowel = /[^A-Za-z]{3}/g
    if (str.match(vowel) === null) {
      return false
    } else {
      return (str.match(vowel)[0])
    }
  },

  matchesPattern: function (str) {
    let three = /^\d{3}-\d{3}-\d{4}$/gm

    if (str.match(three) === null) {
      return false
    } else {
      return true
    }

  },

  isUSD: function (str) {
    let usd = /^\$((?[0-9]\d{1,3})(,?[0-9]\d{1,3})(,\d{1,3})(.\d{2}))$/gm;
    console.log(usd.test(str));
  }
};
