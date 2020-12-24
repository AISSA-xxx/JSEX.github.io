/*var menu=document.getElementById("menu").getElementsByTagName("li");
var text=document.getElementById("text");
var btn=document.getElementById("zar");
var mymenu=document.getElementById("menu");   ou */  

var menu=document.querySelector("#menu").getElementsByTagName("li");
var text=document.querySelector("#text");
var btn=document.querySelector("#zar");
var mymenu=document.querySelector("#menu");
var jobValue = document.querySelector("#mpo");

var btn=document.querySelector("#zar");
var btn=document.querySelector("#zar");
var btn=document.querySelector("#zar");


var cmp=0;
//menu[0].innerHTML="aissa";

/*for (var i = 0; i < menu.length; i++) 
{
	menu[i].addEventListener("click",selectItem);
}*/

mymenu.addEventListener("click",selectItem);

function selectItem(n)
{
 if (n.target.nodeName == "LI")
 {
  text.innerHTML=n.target.innerHTML;
  for (var i = 0; i < menu.length; i++) 
  {
   menu[i].classList.remove("selacted");
  }
  n.target.classList.add("selacted");
 }
}

/*function selectItem()
{
 /*alert("§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§");                   messagebox
 text.innerHTML=this.innerHTML;
 for (var i = 0; i < menu.length; i++) 
 {
	menu[i].classList.remove("selacted");
 }
 this.classList.add("selacted");
}*/

btn.addEventListener("click",addItem);

function addItem()
{
 /*mymenu.innerHTML += "<div>"+"<li>"+jobValue.value+"</li>"+" "+"<button type="button"></button>"+"</div>";*/
 mymenu.innerHTML += "<li>"+jobValue.value+"</li>";
 jobValue.value=" ";
}
