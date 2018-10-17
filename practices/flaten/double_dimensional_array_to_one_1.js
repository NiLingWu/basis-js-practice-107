'use strict';

function double_to_one(collection) {
  var result =[];
  for(var indexC in collection)
  {
    if(typeof (collection[indexC]) === 'object')
    {
      for(var indexC2 in collection[indexC])
      {
        result.push(collection[indexC][indexC2]);
      }
    }
    else
    {
      result.push(collection[indexC]);
    }
  }
  return result;
}

module.exports = double_to_one;
