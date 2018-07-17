'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum = collection.reduce((a,b)=>a+b);
  var len = collection.length;
  return sum/len;

}

module.exports = compute_average;

