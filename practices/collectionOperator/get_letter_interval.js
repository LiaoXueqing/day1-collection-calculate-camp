'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var max = number_a>number_b?number_a:number_b;
  var min = number_a>number_b?number_b:number_a;
  var number = min;
  var result = [];
  while(number<=max){
    result.push(String.fromCharCode(number+96));
    number++;
  }
  if(max==number_a) result.reverse();
  return result;
}

module.exports = get_letter_interval;
