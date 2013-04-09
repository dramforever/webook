var running = false,leng = 0,textEle,listsEle,outerEle;
function hidesel()
{
	var selEle = document.getElementById("sel");
	selEle.style.display = "none";
	outerEle.style.display = "block";
}
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
	outerEle = document.getElementById("outer");
	outerEle.style.display = "none";
	var x = 1;
	for(i in window.lists)
	{
		var li = document.createElement("li");
		li.innerHTML = x.toString() + ". " + i;
		li.onclick = function(){
			window.list = window.lists[this.innerHTML.replace(/^\d+?\. /,"")];
			start();
			hidesel();
		}
		listsEle.appendChild(li);
		x++;
	}
	document.body.onkeydown = keydown;
}
function start(){
	setInterval(choose , 10);
}
function keydown(e){
	var keynum;
	if(window.event) // IE
	{
		keynum = event.keyCode
	}
	else if(e.which) // Netscape/Firefox/Opera
	{
		keynum = e.which;
	}
	if(keynum == 27 /* Esc */)
	{
		window.location.reload();
	}
	else if(keynum == 32 /* Space */){
		if(typeof window.list != "undefined")toggle();
		return false;
	}
	else if(keynum <= 53 && keynum >= 49) /* Between 1 and 5 */
	{
		var cnt = 48;
		for(i in window.lists)
		{
			cnt++;
			if(cnt == keynum)
			{
				window.list = window.lists[i];
				start();
				hidesel();
				break;
			}
		}
	}
	else if(keynum == 81 /* q */)
	{
		window.close();
	}
}
window.onload = init;
