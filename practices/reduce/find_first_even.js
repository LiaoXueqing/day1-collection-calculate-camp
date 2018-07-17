'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var len = collection.length;
  for(var i=0;i<len;i++){
    if(collection[i]%2==0) return collection[i];
  }
}

module.exports = find_first_even;

