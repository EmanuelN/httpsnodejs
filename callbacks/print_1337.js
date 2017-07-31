var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLeet (html){
  var output = html.replace(/er/g, '0r').replace(/a/g, '4').replace(/you/g, 'j00')
  .replace(/e/g, '3').replace(/l/g, '1').replace(/o/g, '0')
  .replace(/s/g, '5').replace(/t/g, '7').replace(/ck/g, 'x')

  console.log(output)
};

getHTML(requestOptions, printLeet);