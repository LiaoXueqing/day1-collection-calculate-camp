'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var str_arr=collection.toString().split(",");
  var int_arr=[];
  for(var i=0;i<str_arr.length;i++){
    if(int_arr.indexOf(+str_arr[i])==-1) int_arr.push(+str_arr[i]);
  }
  return int_arr;
}

module.exports = double_to_one;
