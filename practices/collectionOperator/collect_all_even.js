'use strict';

function collect_all_even(collection) {
  var collectionB = [],index;
  for(index in collection)
  {
    if(collection[index]%2==0)
    {
      collectionB.push(collection[index]);
    }
  }
  return collectionB;
}

module.exports = collect_all_even;
