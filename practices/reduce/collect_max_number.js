'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  // var max = collection[0];
  // for (let i = 1; i < collection.length; i++) {
  //   max=collection[i]>max?collection[i]:max;
  // }
  // return max;
  return collection.sort().pop();
}

module.exports = collect_max_number;
