'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(function(item){return item%2==1;})
    .map((item)=>{return item*3+2;});
}

module.exports = hybrid_operation_to_uneven;

