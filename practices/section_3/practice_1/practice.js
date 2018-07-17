function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_b = object_b["value"];
  let len = collection_a.length;
  for(let i=0;i<len;i++){
    var k = collection_a[i].key;
    if(collection_b.indexOf(k)!=-1){
      collection_a[i].count--;
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
