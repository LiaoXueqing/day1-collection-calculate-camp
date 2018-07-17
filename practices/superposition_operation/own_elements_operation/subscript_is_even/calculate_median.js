'use strict';
var calculate_median = function(collection){
  var even_arr = collection.filter((item)=>item%2==0);
  let len = even_arr.length;
  if(len%2==0){
    return (even_arr[len/2-1]+even_arr[len/2])/2;
  }else{
    return even_arr[(len-1)/2];
  }
};
module.exports = calculate_median;
