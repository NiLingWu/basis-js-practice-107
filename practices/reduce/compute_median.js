'use strict';

function compute_median(collection) {

  var Length=collection.length;
  collection.sort(sortNumber);
  if(Length%2==0)
  {
    var num1 = parseInt(collection[Length/2]);
    var num2 = parseInt(collection[Length/2-1]);
    var num = (num1+num2)/2;
    return num;
  }
  else
  {
    return parseInt(collection[(Length-1)/2]);
  }
}

module.exports = compute_median;


function sortNumber(number1,number2)
{
  return number1 - number2;
}
