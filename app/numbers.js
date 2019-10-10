exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    let a, b;
    a = num.toString(2);
    a = a.split("").reverse().join("");
    b = a.slice(bit - 1, bit)
    return parseFloat(b)
  },

  base10: function (str) {
    return result = parseInt(str, 2);
  },

  convertToBinary: function (num) {
    let a;
    if (num < 128 && num >= 64) {
      a = num.toString(2);
      return ('0' + a)
    } else if (num <= 63 && num >= 32) {
      a = num.toString(2);
      return ('00' + a)
    } else if (num <= 31 && num >= 16) {
      a = num.toString(2);
      return ('000' + a)
    } else if (num <= 15 && num >= 8) {
      a = num.toString(2);
      return ('0000' + a)
    } else if (num <= 7 && num >= 4) {
      a = num.toString(2);
      return ('00000' + a)
    } else if (num <= 3 && num >= 2) {
      a = num.toString(2);
      return ('000000' + a)
    } else if (num === 1) {
      a = num.toString(2);
      return ('0000000' + a)
    } else {
      return a = num.toString(2);
    }
  },

  multiply: function (a, b) {
    return mult = ((a * 10) * (b * 10)) / 100;
  }
};
