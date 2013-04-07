var running = false,leng = 0,textEle,listsEle;
function show(txt)
{
	textEle.innerHTML = txt;
}
function toggle()
{
	running = !running;
}
function choose(){
	if(!running)return;
	var rand = Math.floor(Math.random()*window.list.length);
	show(window.list[rand]);
}
function init(){
	if(typeof window.lists != "object")
	{
		alert("conf.js中有错误");
		return;
	}
	textEle = document.getElementById("inner");
	document.getElementById("inner").onclick = toggle;
	listsEle = document.getElementById("lists");
	var x = 1;
	for(i in window.lists)
	{
		var li = document.createElement("li");
		li.innerHTML = x.toString + ". " + i;
		li.onclick = function(){
			window.list = window.lists[this.innerHTML.replace(/^\d+?\. /,"")];
			start();
			var selEle = document.getElementById("sel");
			selEle.style.display = "none";
		}
		listsEle.appendChild(li);
	}
}
function start(){
	setInterval(choose , 10);
}

window.onload = init;
