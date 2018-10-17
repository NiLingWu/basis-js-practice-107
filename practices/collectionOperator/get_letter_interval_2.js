'use strict';

function get_letter_interval_2(number_a, number_b) {
  var collection = makeupArray(number_a,number_b);
  collection = changeArray(collection);
  return collection;
}

module.exports = get_letter_interval_2;

function makeupArray(numA,numB)
{
  var collection = [];
  if(numA < numB)
  {
    while (numA<=numB)
    {
     collection.push(numA);
      numA++;
    }
  }
  else if(numA > numB)
  {
    while (numA>=numB)
    {
      collection.push(numA);
      numA--;
    }
  }
  else
  {
    collection.push(numA);
  }
  return collection;
}

function changeArray(collection)
{
  var indexC;
  for (indexC in collection)
  {
    var num = collection[indexC];
    if(num<=26)
    {
      collection[indexC] = String.fromCharCode(collection[indexC]+96);
    }
    else
    {
      if(num%26==0)
      {
        var string1 = String.fromCharCode(parseInt(num/26)+96-1);
        var string2 = String.fromCharCode(122);
      }
      else
      {
        var string1 = String.fromCharCode(parseInt(num/26)+96);
        var string2 = String.fromCharCode((num%26)+96);
      }
      collection[indexC] =string1+string2;
    }
  }
  return collection;
}
