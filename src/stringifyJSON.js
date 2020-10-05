// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //If obj type is a primitive type then we need to put it in string format

  //If obj is an array iterate through that array and stingifiy each element
  if (Array.isArray(obj)) {
    let results = [];
    obj.forEach(item => {
      results.push(stringifyJSON(item));
    });
    return `[${results.join(',')}]`;
  }

  //If obj is an object iterate through that object and stringify each element
  if (obj && typeof obj === 'object') {
    let results = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }

    return `{${results.join(',')}}`;
  }

  //This will cover our primitive values
  if (typeof obj === 'string') {
    return `"${obj.toString()}"`;
  }

  return '' + obj;
};
