'use strict';
var even_group_calculate_average = function(collection){
  let len = collection.length;
  let arr=[];
  for (let i=0;i<len;i++){
    if(i%2==1){
      arr.push(collection[i]);
    }
  }
  let result = [];
  if(arr.filter((item)=>item%2==0).length==0){
    result.push(0); return result;
  }
  var one = arr.filter((item)=>item%2==0&&item<10);
  var two = arr.filter((item)=>item%2==0&&item>=10&&item<100);
  var three = arr.filter((item)=>item%2==0&&item>=100&&item<1000);

  if(one.length>0) {
    result.push(one.reduce((a, b) => a + b) / one.length);
  }
  if(two.length>0) {
    result.push(two.reduce((a, b) => a + b) / two.length);
  }
  if(three.length>0) {
    result.push(three.reduce((a, b) => a + b) / three.length);
  }
  return result;
};
module.exports = even_group_calculate_average;
