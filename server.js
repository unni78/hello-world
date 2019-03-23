var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'ui','index.html'));
//res.send('Hai Unni....WELCOME');
})


app.get('/article-one',function(req,res){
res.sendFile(path.join(__dirname,'ui','article-one.html'));
//res.send('Article one would be served from here');
})

app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname,'ui','article-two.html'));
//res.send('Article two would be served from herer');
})

app.get('/article-three',function(req,res){
res.sendFile(path.join(__dirname,'ui','article-three.html'));
//res.send('Article three would be served from here');
})

app.get('/ui/Style.css',function(req,res){
res.sendFile(path.join(__dirname,'ui','Style.css'));
//res.send('Article three would be served from here');
})


app.listen(8080,function(){
	console.log('iMAD listening on port 8080');
});