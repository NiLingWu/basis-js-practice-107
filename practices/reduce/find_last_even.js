'use strict';

function find_last_even(collection) {
  var element ;
  for(var indexC in collection)
  {
    if(collection[indexC]%2==0)
    {
      element=collection[indexC];
    }
  }
  return element;
}

module.exports = find_last_even;
