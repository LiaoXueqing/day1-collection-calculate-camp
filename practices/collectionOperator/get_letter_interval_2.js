'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var max = number_a>number_b?number_a:number_b;
  var min = number_a>number_b?number_b:number_a;
  var number = min;
  var result = [];
  while(number<=max){
    var str = "";
    if(number>26) str += String.fromCharCode((number-1) / 26 + 96);
    if(number%26==0){
      str+="z";
    }else {
      str += String.fromCharCode(number % 26 + 96);
    }
    result.push(str);
    number++;
  }
  if(max==number_a) result.reverse();
  return result;
}

module.exports = get_letter_interval_2;

