'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var max = number_a>number_b?number_a:number_b;
  var min = number_a>number_b?number_b:number_a;
  var number;
  while(min<=max) {
    result.push(min);
    min++;
  }
  if(max==number_a) result = result.reverse();

  return result;
}

module.exports = get_integer_interval;

