'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var s = [];
  collection_a.filter(function(item){
    if(collection_b.indexOf(item)==-1) s.push(item);
  });
  return s;
}

module.exports = choose_no_common_elements;
