'use strict';

function spilt_to_zero(number, interval) {
  var collection =[];
  var Interval= -1*interval;
  if(number%interval!=0)
  {
    while(number > Interval)
    {
      collection.push(parseFloat(number.toFixed(1)));
      number -= interval;
    }
  }
  else
  {
    while(number >= 0)
    {
      collection.push(parseFloat(number.toFixed(1)));
      number -= interval;
    }
  }
  return collection;
}

module.exports = spilt_to_zero;
