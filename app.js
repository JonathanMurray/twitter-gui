var express = require('express');
var app = module.exports = express.createServer();
var cors = require('cors');

app.configure(function(){
  // app.use(express.methodOverride());
  app.use(cors());
  app.set("view options", {layout: false});
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.render("index.html");
});

app.listen((process.env.PORT || 5000), function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});