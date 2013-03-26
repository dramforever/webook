var running = false,leng = 0,textEle;
function show(txt)
{
	textEle.innerHTML = txt;
}
function toggle()
{
	running = !running;
}
function choose(){
	console.log("In function choose");
	if(!running)return;
	var rand = Math.round(Math.random()*leng);
	show(window.list[rand]);
}
function init(){
	if(
		typeof window.list != "array" ||
		window.list.length == 0
	)
	{
		alert("conf.js中有错误");
		return;
	}
	leng = window.list.length;
	textEle = document.getElementById("inner");
	document.getElementById("inner").addEventListener("click",toggle,false);
	setInterval(10 , choose);
}

window.onload = init;
