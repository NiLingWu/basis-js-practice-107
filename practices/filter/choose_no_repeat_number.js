'use strict';

function choose_no_repeat_number(collection) {
  var Array =[];
  for(var indexC in collection)
  {
    if(check(collection[indexC],Array))
    {
      Array.push(collection[indexC]);
    }
  }
  return Array;
}

module.exports = choose_no_repeat_number;

function  check(str,array)
{
  for(var indexA in array)
  {
    if(array[indexA] == str)
    {
      return false;
    }
  }
  return true;
}
