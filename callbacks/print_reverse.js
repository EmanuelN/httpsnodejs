var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printReverse (html){
  var splitStr = html.split("");
  var reverseArray = splitStr.reverse();
  var str = reverseArray.join("");
  console.log(str);
};

getHTML(requestOptions, printReverse);