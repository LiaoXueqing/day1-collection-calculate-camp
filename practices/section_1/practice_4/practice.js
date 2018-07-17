function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var len = collection_a.length;
  var a = [];
  for(let i=0;i<len;i++){
    a.push(collection_a[i].key);
  }
  var result=[];
  a.filter(function(element){
    if(object_b["value"].indexOf(element)!=-1) result.push(element);
  });
  return result;
}

module.exports = collect_same_elements;
