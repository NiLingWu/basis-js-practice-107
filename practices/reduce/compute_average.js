'use strict';

function compute_average(collection) {
  var sum= 0,count =0;
  for(var indexC in collection)
  {
    sum += collection[indexC];
    count++;
  }
  var avg = sum / count ;
  return avg;
}

module.exports = compute_average;

