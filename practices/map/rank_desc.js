'use strict';
var rank_desc = function(collection){
  var collection1 = collection.concat();
  collection1.sort(sortNumber);
  return collection1;
};

module.exports = rank_desc;

function sortNumber(number1,number2)
{
  return number1 - number2;
}
