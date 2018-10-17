'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result=[];
  for(var indexA in collection_a)
  {
    if(check(collection_a[indexA],collection_b))
    {
      result.push(collection_a[indexA]);
    }
  }
  return result;
}

module.exports = choose_divisible_integer;

function check(str,Array)
{
  for(var indexA in Array)
  {
    if(str%Array[indexA]==0)
    {
      return true;
    }
  }
  return false;
}
