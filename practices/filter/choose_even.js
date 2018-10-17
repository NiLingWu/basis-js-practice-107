'use strict';

function choose_even(collection) {
  var Array = [];
  for(var indexC in collection)
  {
    if(collection[indexC]%2==0)
    {
      Array.push(collection[indexC]);
    }
  }
  return Array;
}

module.exports = choose_even;
