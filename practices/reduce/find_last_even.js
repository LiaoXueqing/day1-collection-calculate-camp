'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var len = collection.length;
  for(var i=len-1;i>0;i--){
    if(collection[i]%2==0) return collection[i];
  }
}

module.exports = find_last_even;
