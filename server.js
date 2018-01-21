var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
  // console.log(req.headers['user-agent']);
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/yourdata', function(req,res){
  
  var agent = req.headers['user-agent'].toString().split('(')[1].split(')')[0];
  var obj = {
    'youIP': req.headers['x-forwarded-for'].split(',')[0],
    'languageYouSpeak': req.headers['accept-language'].split(',')[0] ,
    'softwareYouUse': agent
  };
  
  console.log(agent);
  res.send('<span><h4>Now I know more about you...</h4></span>'+JSON.stringify(obj));
});

app.listen(process.env.PORT);