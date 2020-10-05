// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //create array var to store doc elements with className
  let results = [];
  //create function to iterate each node
  let search = (node) => {
    //check current node to see if has classname
    if (node.className.indexOf(className) !== -1) {
      results.push(node);
    }
      //if it does push to array
    //checkif current node has children
    for (var i = 0; i < node.classList.length; i++) {
      search(node.children[i]);
    }
      // if it does, recursively check if they have classname
  };
  //invoke function
  search(document.body);
  //return array
  return results;
};