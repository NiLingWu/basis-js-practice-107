'use strict';

function get_integer_interval(number_a, number_b) {
  var collection = [];
  if(number_a < number_b)
  {
    while (number_a<=number_b)
    {
      collection.push(number_a);
      number_a++;
    }
  }
  else if(number_a > number_b)
  {
    while (number_a>=number_b)
    {
      collection.push(number_a);
      number_a--;
    }
  }
  else
  {
    collection.push(number_a);
  }
  return collection;
}

module.exports = get_integer_interval;


