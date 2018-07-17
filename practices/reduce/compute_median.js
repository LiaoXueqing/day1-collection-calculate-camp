'use strict';

function compute_median(collection) {
  //在这里写入代码
  var len = collection.length;
  if(len%2==0){
    return (collection[len/2-1]+collection[len/2])/2;
  }else{
    return collection[(len-1)/2];
  }
}

module.exports = compute_median;


