'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum = collection.reduce((a,b)=> a +b);
  var avg = Math.ceil(sum/collection.length);
  return String.fromCharCode(avg+96);
}

module.exports = average_to_letter;

