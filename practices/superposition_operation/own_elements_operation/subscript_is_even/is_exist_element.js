'use strict';
var is_exist_element = function(collection,element){
  let len = collection.length;
  let arr=[];
  for (let i=0;i<len;i++){
    if(i%2==0){
      arr.push(collection[i]);
    }
  }
  if(arr.indexOf(element)!=-1) return true;
  return false;
};
module.exports = is_exist_element;
