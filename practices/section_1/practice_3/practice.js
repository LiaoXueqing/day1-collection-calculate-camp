function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var b = object_b["value"];
  var result=[];
  collection_a.filter(function(element){
    if(b.indexOf(element)!=-1) result.push(element);
  });
  return result;
}

module.exports = collect_same_elements;
