'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if(number_a==number_b) {
    if(number_a%2==0) {
      result.push(number_a);
    }
  }else{
    var max = number_a>number_b?number_a:number_b;
    var min = number_a>number_b?number_b:number_a;
    var number;
    if(min%2==0) {
      number = min;
    }else {
      number = min+1;
    }
    while(number<=max) {
      result.push(number);
      number=number+2;
    }
    if(min==number_b) result = result.reverse();
  }
  return result;
}

module.exports = get_integer_interval_2;
