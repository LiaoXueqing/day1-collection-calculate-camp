'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var str = collection.split("->");
  var len = str.length;
  if(len%2==0){
    return ((+str[len/2-1])+(+str[len/2]))/2;
  }else{
    return +str[(len-1)/2];
  }

}

module.exports = compute_chain_median;
