'use strict';

function collect_max_number(collection) {
  var find =collection[0];
  for(var indexC in collection)
  {
    if(find <collection[indexC])
    {
      find = collection[indexC];
    }
  }
  return find;
}

module.exports = collect_max_number;
