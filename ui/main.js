console.log('Loaded');

//var ele = document.getElementById('main-txt');
//ele.innerHTML='Happy Holi';

var i=0;

function MoveRight()
{

i=i+1;

ele.style.marginLeft= i + 'px';
	
}

var ele=document.getElementById('photo');

ele.onclick=function()
{
	//ele.style.marginLeft='100px';
	
	//ANIMATION
	var interval = setInterval(MoveRight,100);
	
};

/*
//Increment the counter once "Click Me" is pressed....Client-side scipt....No SERVER side calls here....
var ctr = document.getElementById('btnCtr');
var spn=document.getElementById('spnCtr');

alert('Value of ctr is ->['+ctr+']');
alert('Value of spn is ->['+spn+']');
alert('Value of ele is ->['+ele+']');

var c=0;
ctr.onclick=function(){
	var spn=document.getElementById('spnCtr');
	c=c+1;
	spn.innerHTML=c.toString();
};
*/
var ctr = document.getElementById('btnCtr');

//AJAX ....Increment the counter once "Click Me" is pressed using AJAX calls....

ctr.onclick=function(){
	
		//create new request
		httpReq=new XMLHttpRequest();

		httpReq.onreadystatechange=function(){
			if (httpReq.readyState===XMLHttpRequest.DONE)
			{
				if (httpReq.status===200)
				{
					var v = httpReq.responseText;
					var spn=document.getElementById('spnCtr');
					spn.innerHTML=v.toString();
				}
			}
		};
		
		//Make the request
		httpReq.open('GET','http://127.0.0.1:8080/counter',true);
		httpReq.send();
};




