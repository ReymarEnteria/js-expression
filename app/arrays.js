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

  },

  duplicates: function (arr) {

  },

  square: function (arr) {

  },

  findAllOccurrences: function (arr, target) {

  }
};
