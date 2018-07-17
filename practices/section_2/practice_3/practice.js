function count_same_elements(collection) {
  //在这里写入代码
  var countSame = {};
  let len = collection.length;
  for(let i=0;i<len;i++){
    var repeat = 1;
    var str = "";
    if(collection[i].length>1) {
      var s = collection[i].split("");
      str = s[0];
      if(s[s.length-1]=="]") {
        var start = s.indexOf("[");
        var s_repeat = collection[i].substring(start+1,s.length-1);
        repeat = +s_repeat;
      }else{
        repeat = +s[s.length-1];
      }
    }else{
      str = collection[i];
      repeat=1;
    }
    if(countSame[str]==undefined){
      countSame[str]=repeat;
    }else{
      countSame[str]+=repeat;
    }
  }
  var result=[];
  for (let [key, value] of Object.entries(countSame)) {
    let o = {name:key,summary:value};
    result.push(o);
  }
  console.log(result);
  return result;
}

module.exports = count_same_elements;
