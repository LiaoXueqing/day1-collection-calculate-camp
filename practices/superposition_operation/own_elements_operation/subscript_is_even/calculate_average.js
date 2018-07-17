'use strict';
var calculate_average = function(collection){
  let len = collection.length;
  let sum=0;
  let count=0;
  for (let i=0;i<len;i++){
    if(i%2==1){
      sum+=collection[i];count++;
    }
  }
  return sum/count;
};
module.exports = calculate_average;
