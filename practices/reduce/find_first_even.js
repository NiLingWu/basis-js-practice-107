'use strict';

function find_first_even(collection) {
  var element ;
  for(var indexC in collection)
  {
    if(collection[indexC]%2==0)
    {
     element=collection[indexC];
      break;
    }
  }
  return element;
}

module.exports = find_first_even;

