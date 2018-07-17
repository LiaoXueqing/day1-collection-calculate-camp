'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  collection_b.filter(function(item){
    if(collection_a.indexOf(item)!=-1) result.push(item);
  });
  return result;
}

module.exports = get_intersection;
