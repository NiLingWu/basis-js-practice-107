'use strict';
var map_to_three_multiples = function(collections){
  var result=[];
  for(var indexC in collections)
  {
    result.push(collections[indexC]*3);
  }
  return result;
};

module.exports = map_to_three_multiples;
