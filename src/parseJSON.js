// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // '["one", "two"]',
  // '{"a": "b", "c": "d"}'

  if (json[0] === '[') {
    let slicedArray = json.slice(1, json.length - 1);
    let splitArray = slicedArray.split(', ');
    let results = [];
    splitArray.forEach(item => {
      if (item[0] === '"') {
        item.splice(0, 1);
      }
      if (item[item.length - 1] === '"') {
        item.splice(0, -1);
      }
      console.log(item);
    });
    console.log(results);
  }

  if (json[0] === '{') {

  }

  if (json[0] === '"') {
    return json.slice(1, json.length - 1);
  }
};
