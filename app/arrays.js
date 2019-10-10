exports = typeof window === 'undefined' ? global : window;


exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return _.indexOf(arr, item)
  },
  sum: function (arr) {
    return _.sum(arr);
  },
  remove: function (arr, item) {
    let a = arr;
    _.pullAll(arr, [item])
    return a
  },

  removeWithoutCopy: function (arr, item) {
    let a = arr;
    _.pullAll(arr, [item])
    return a
  },

  append: function (arr, item) {
    let a = arr
    arr.push(item)
    return a
  },

  truncate: function (arr) {
    let a = arr
    arr.pop()
    return a
  },

  prepend: function (arr, item) {
    let a = arr
    arr.unshift(item)
    return a
  },

  curtail: function (arr) {
    let a = arr;
    _.pullAt(a, [0])
    return a;
  },

  concat: function (arr1, arr2) {
    return a = [...arr1, ...arr2]
  },

  insert: function (arr, item, index) {
    let a = arr;
    arr.splice(index, 0, item)
    return a;
  },

  count: function (arr, item) {
    let c = [...arr], b = [], a;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {

        if (c[i] === c[j] && c[i] === item) {
          a = c[i];
          b.push(a);
        }
      }
    }

    return b.length;
  },

  duplicates: function (arr) {
    let c = [...arr], b = [], a;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {

        if (c[i] === c[j]) {
          a = c[i];
          b.push(a);
        }
      }
    }

    return _.uniq(b);
  },

  square: function (arr) {
    let a = [];
    let b;
    let c = [...arr];

    for (let i = 0; i < arr.length; i++) {
      b = _.pullAt(c, 0);
      b = b * b;
      a.push(b);
    }
    return a
  },

  findAllOccurrences: function (arr, target) {
    let a = [];
    let b;

    for (let i = 0; i < arr.length; i++) {
      if (_.indexOf(arr, target) === -1) {
      } else {
        b = _.indexOf(arr, target)
        _.pullAt(arr, b)
        a.push(b + i);
      }
    }
    return a;
  }
};
