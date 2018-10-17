'use strict';

function get_letter_interval(number_a, number_b) {
  var collection = [],indexCollection;
  if(number_a < number_b)
  {
    while (number_a<=number_b)
    {
      collection.push(number_a.toString());
      number_a++;
    }
  }
  else if(number_a > number_b)
  {
    while (number_a>=number_b)
    {
      collection.push(number_a.toString());
      number_a--;
    }
  }
  else
  {
    collection.push(number_a.toString());
  }
  for(indexCollection in collection)
  {
    var collectionCode = collection[indexCollection].charCodeAt();
    collection[indexCollection]= String.fromCharCode(collectionCode+48);
  }
  return collection;
}

module.exports = get_letter_interval;
