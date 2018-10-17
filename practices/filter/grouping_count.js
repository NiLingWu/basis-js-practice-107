'use strict';

function grouping_count(collection) {
  var array = makeup(collection);
  for(var indexA in array)
  {
    array[indexA]=change(array[indexA]);
  }
  return array;
}

module.exports = grouping_count;

function makeup(collection)
{
  var array = [];
  for(var indexC in collection)
  {
    var num = find(array,collection[indexC]);
    if(num !== -1)
    {
      array[num].count++;
    }
    else
      array.push({key:collection[indexC],count:1});
  }
  return array;
}

function find(array,string)
{
  var num=-1;
  for (var indexA in array)
  {
    if(array[indexA].key===string)
    {
      num = indexA;
      break;
    }
  }
  return num;
}

function change(string)
{
  var name = string.key;
  var count = string.count;
  var Str = name+':'+count;
  return Str;
}
