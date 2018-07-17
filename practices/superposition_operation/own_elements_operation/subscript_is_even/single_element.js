'use strict';
var single_element = function(collection){
  let len = collection.length;
  let arr=[];
  for (let i=0;i<len;i++){
    if(i%2==1){
      arr.push(collection[i]);
    }
  }
  let result=[];
  for(let i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])&&result.indexOf(arr[i]==-1))
      result.push(arr[i]);
  }
  return result;
};
module.exports = single_element;
