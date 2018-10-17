'use strict';
var rank_asc = function(collection){
  var collection1 = collection.concat();
  collection1.sort(sortNumber);
  return collection1;
};

module.exports = rank_asc;

function sortNumber(number1,number2)
{
  return number2 - number1;
}
