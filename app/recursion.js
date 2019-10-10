exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {

  },

  permute: function (arr) {


  },

  fibonacci: function (n) {
    let m = 0;
    let o = 1;
    let p;

    for (let i = 1; i <= n; i++) {
      if (i == 1) {
        p = 1
      } else {
        p = m + o;
        m = o;
        o = p;
      }
    }
    return p;
  },

  validParentheses: function (n) {

  }
};
