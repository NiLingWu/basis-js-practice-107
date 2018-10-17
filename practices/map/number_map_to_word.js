'use strict';
var number_map_to_word = function(collection){
  var array=[];
  for (var indexC in collection)
  {
    var num = parseInt(collection[indexC]);
    array.push(change(num));
  }
  return array;
};

module.exports = number_map_to_word;

function change(num)
{
  if(num<=26)
  {
    return String.fromCharCode(num+96);
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
    return string1+string2;
  }
}
