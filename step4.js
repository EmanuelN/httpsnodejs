var https = (require('https'));

function getHTML(options, callback){

  var myStr = "";

  https.get(options, function(response){
      response.setEncoding('utf8');

      response.on('data', function(data){
        console.log('Chunk received. ');
        myStr += data;
      });

      response.on('end', function(){
        callback(myStr);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);