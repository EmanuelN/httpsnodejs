var https = (require('https'));

function getAndPrintHTML (options) {

  var myStr = "";

  https.get(options, function(response){
      response.setEncoding('utf8');

      response.on('data', function(data){
        console.log('Chunk received. ');
        myStr += data;
      });

      response.on('end', function(){
        console.log('Response stream complete.', myStr)
      });
    });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);