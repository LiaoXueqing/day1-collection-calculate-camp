'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var setUnion = new Set(collection_a.concat(collection_b));
  return [...setUnion];

}

module.exports = get_union;

