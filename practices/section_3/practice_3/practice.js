var count_same_elements = require("../../section_2/practice_1/practice.js");

function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var countSame = count_same_elements(collection_a);
  console.log(countSame);
  var collection_b = object_b["value"];


  let len = countSame.length;
  for(let i=0;i<len;i++){
    var k = countSame[i].key;
    if(collection_b.indexOf(k)!=-1){
      var num = Math.floor((countSame[i].count)/3);
      countSame[i].count = countSame[i].count - num;
    }
  }
  return countSame;


}

module.exports = create_updated_collection;
