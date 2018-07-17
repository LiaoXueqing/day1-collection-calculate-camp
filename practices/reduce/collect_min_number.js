'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  // var min = collection[0];
  // for (let i = 1; i < collection.length; i++) {
  //   min=collection[i]<min?collection[i]:min;
  // }
  // return min;
  return collection.sort().shift();
}

module.exports = collect_min_number;

