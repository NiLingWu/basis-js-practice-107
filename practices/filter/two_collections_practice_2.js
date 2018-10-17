'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var jiao = jiaoji(collection_a, collection_b);
  var result = bingji(collection_a, collection_b);
  for(var indexR in result)
  {
    for(var indexJ in jiao)
    {
      if(jiao[indexJ]===result[indexR])
      {
        result.splice(indexR,1);
      }
    }
  }
  return result;
}

module.exports = choose_no_common_elements;

function jiaoji(collection_a,collection_b)
{
  var result =[];
  for(var indexA in collection_a)
 {
   for(var indexB in collection_b)
   {
     if(collection_a[indexA] == collection_b[indexB])
     {
       result.push(collection_b[indexB]);
       break;
     }
   }
 }
  return result;
}

function bingji(collection_a,collection_b)
{
  var Array =collection_a.concat(collection_b);
  var result =[];
  for(var indexA in Array)
  {
    if(check(Array[indexA],result))
    {
      result.push(Array[indexA]);
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
