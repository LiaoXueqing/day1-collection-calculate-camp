'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var s = new Set(collection);
  return [...s];
}

module.exports = choose_no_repeat_number;
