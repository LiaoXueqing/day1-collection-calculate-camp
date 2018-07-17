function count_same_elements(collection) {
  //在这里写入代码
  var countSame = {};
  let len = collection.length;
  for(let i=0;i<len;i++){
    if(countSame[collection[i]]==undefined){
      countSame[collection[i]]=1;
    }else{
      countSame[collection[i]]++;
    }
  }
  var result=[];
  for (let [key, value] of Object.entries(countSame)) {
    let o = {key:key,count:value};
    result.push(o);
  }
  console.log(result);
  return result;
}

module.exports = count_same_elements;
