'use strict';

function calculate_elements_sum(collection) {
  var sum= 0;
  for(var indexC in collection)
  {
    sum += collection[indexC];
  }
  return sum;
}

module.exports = calculate_elements_sum;

