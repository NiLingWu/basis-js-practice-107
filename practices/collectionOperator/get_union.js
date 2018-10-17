'use strict';

function get_union(collection_a, collection_b) {

  var collection_c=[];
  var Array = collection_a.concat(collection_b);
  for(var indexArray in Array)
  {
     if(check(Array[indexArray],collection_c))
     {
       collection_c.push(Array[indexArray]);
     }
  }
  return collection_c;
}

module.exports = get_union;

function check(str,array)
{
  for(var indexA in array)
  {
    if(array[indexA]==str)
    {
      return false;
    }
  }
  return true;
}
