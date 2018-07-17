'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let len = collection.length;
  let number;
  if(len%2==0){
    number = Math.ceil((collection[len/2-1]+collection[len/2])/2);
  }else{
    number = collection[(len-1)/2];
  }

  var result = "";
  if(number>26) result += String.fromCharCode((number-1) / 26 + 96);
  if(number%26==0){
    result+="z";
  }else {
    result += String.fromCharCode(number % 26 + 96);
  }

  return result;
}

module.exports = median_to_letter;
