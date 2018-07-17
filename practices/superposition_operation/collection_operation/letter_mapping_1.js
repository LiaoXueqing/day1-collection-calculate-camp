'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var even_arr = collection.filter(function(item){
    return item%2==0;
  });
  // var result = [];
  return even_arr.map(function(number){return String.fromCharCode(number+96);})
}

module.exports = even_to_letter;
