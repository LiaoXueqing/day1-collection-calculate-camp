'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var str_arr=collection.toString().split(",");
  var int_arr=str_arr.map(function(data){
    return +data;
  });
  return int_arr;
}

module.exports = double_to_one;
