'use strict';

function choose_common_elements(collection_a, collection_b) {
  var result =[];
  for(var indexA in collection_a)
  {
    for(var indexB in collection_b)
    {
      if(collection_a[indexA] == collection_b[indexB])
      {
        result.push(collection_b[indexB]);
        break;
      }
    }
  }
  return result;
}

module.exports = choose_common_elements;
