'use strict';

function double_to_one(collection) {
  var Array =TwoChangeOne(collection);
  var result = [];
  for(var indexA in Array)
  {
    if(check(Array[indexA],result))
    {
      result.push(Array[indexA]);
    }
  }
  return result;
}

module.exports = double_to_one;

function TwoChangeOne(collection)
{
  var result =[];
  for(var indexC in collection)
  {
    if(typeof (collection[indexC]) === 'object')
    {
      for(var indexC2 in collection[indexC])
      {
        result.push(collection[indexC][indexC2]);
      }
    }
    else
    {
      result.push(collection[indexC]);
    }
  }
  return result;
}

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
