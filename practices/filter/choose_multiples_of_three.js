'use strict';

function choose_multiples_of_three(collection) {
  var Array = [];
  for(var indexC in collection)
  {
    if(collection[indexC]%3==0)
    {
      Array.push(collection[indexC]);
    }
  }
  return Array;
}

module.exports = choose_multiples_of_three;
