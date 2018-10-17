'use strict';

function calculate_elements_sum(collection, element) {
  var num ;
  for(var indexC in collection)
  {
    if(element == collection[indexC])
    {
      num = parseInt(indexC);
    }
  }
  return num;
}

module.exports = calculate_elements_sum;
