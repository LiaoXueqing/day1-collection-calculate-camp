'use strict';
var even_asc_odd_desc = function(collection){
  var even_arr = collection.filter(function (item1) {
    return item1%2!=1;
  }).sort((a,b)=>a-b);
  var odd_arr = collection.filter(function (item1) {
    return item1%2==1;
  }).sort((a,b)=>a-b).reverse();
  return even_arr.concat(odd_arr);
};
module.exports = even_asc_odd_desc;
