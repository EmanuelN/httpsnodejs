var https = (require('https'));

module.exports = function getHTML (options, callback) {
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
};