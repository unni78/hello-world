var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

//Create JS object to handle content for all three HTML (article-one,article-two,article-three)
var articles=
{
	'article-one':
	{
		title:'Article One | UnniKrishnan',
		header:'Article One',
		date:'23rd March',
		content:'This is the content for my first Article...Using Templating'
	},
	'article-two':
	{
		title:'Article Two | UnniKrishnan',
		header:'Article Two',
		date:'23rd March',
		content:'This is the content for my SECOND Article...NEW NEW'
	},
	'article-three':
	{
		title:'Article Three | UnniKrishnan',
		header:'Article Three',
		date:'23rd March',
		content:'This is the content for my THIRD Article....NEW NEW'
	}
};


//This function removed duplicate code from article-one, article-two and article-three files
function createTemplate(data)
{

ttl=data.title;
hd=data.header;
dt=data.date;
cnt=data.content;

var htmltemplate=
`<html>
  <head>
    <title>${ttl}</title>
	<meta name="viewport" content="width-device-width, initial-scale=1"	/>
	<link href="/ui/Style.css" rel="stylesheet" />
  </head>
  <body>    
	<div class="container">
		<div>
		<a href="/">Home</a>
		</div>
		<hr/>
		<h1>${hd}</h1>			
		<div>${dt}</div>
		<div>
		<p>${cnt}</p>
		</div>
	</div>	
  </body>
</html>`;

return htmltemplate;

}

app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'ui','index.html'));
//res.send('Hai Unni....WELCOME');
});

app.get('/ui/main.js',function(req,res){
	res.sendFile(path.join(__dirname,'ui','main.js'));
});

var ctr = 0 ; //every time the server is restarted, the counter is reset

//Increment the counter each time the '/counter' url is hit
app.get('/counter',function(req,res){
	ctr = ctr + 1;
	res.send(ctr.toString());
});

app.get('/ui/Unni.jpg',function(req,res){
	res.sendFile(path.join(__dirname,'ui','Unni.jpg'));
});

app.get('/:articleName',function(req,res)
{
//'/:articleName' is a functionality of Express framework...
//res.sendFile(path.join(__dirname,'ui','article-one.html'));
var art=req.params.articleName;
res.send(createTemplate(articles[art]));
});

//Below repeaated calls to articles replaced by above
/*
app.get('/article-one',function(req,res){
//res.sendFile(path.join(__dirname,'ui','article-one.html'));
res.send(createTemplate(articleOne));
})

app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname,'ui','article-two.html'));
//res.send('Article two would be served from herer');
})

app.get('/article-three',function(req,res){
res.sendFile(path.join(__dirname,'ui','article-three.html'));
//res.send('Article three would be served from here');
})
*/

app.get('/ui/Style.css',function(req,res){
res.sendFile(path.join(__dirname,'ui','Style.css'));
//res.send('Article three would be served from here');
});


app.listen(8080,function(){
	console.log('iMAD listening on port 8080');
});