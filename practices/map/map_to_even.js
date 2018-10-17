'use strict';
function map_to_even(collection){
  var result=[];
  for(var indexC in collection)
  {
    result.push(collection[indexC]*2);
  }
  return result;
}
module.exports = map_to_even;
