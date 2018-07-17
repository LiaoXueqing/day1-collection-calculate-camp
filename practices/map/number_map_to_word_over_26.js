'use strict';
var number_map_to_word_over_26 = function(collection){
  var result=[];
  for (let i = 0; i < collection.length; i++) {
    var str="";
    var number=collection[i];
    var str = "";
    if(number>26) str += String.fromCharCode((number-1) / 26 + 96);
    if(number%26==0){
      str+="z";
    }else {
      str += String.fromCharCode(number % 26 + 96);
    }
    result.push(str);
  }
  return result;
};

module.exports = number_map_to_word_over_26;
