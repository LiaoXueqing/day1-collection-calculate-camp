'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let arr = collection.filter(function(item){return item%2==1;});
  let sum = arr.reduce((a,b)=>a+b);
  return sum/arr.length;
}

module.exports = average_uneven;
