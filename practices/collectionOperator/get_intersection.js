'use strict';

function get_intersection(collection_a, collection_b) {
  var collection_c =[];
  var indexA,indexB;
  for(indexB in collection_b)
  {
    for(indexA in collection_a)
    {
      if(collection_a[indexA]===collection_b[indexB])
      {
        collection_c.push(collection_b[indexB]);
      }
    }
  }
  return collection_c;
}

module.exports = get_intersection;
