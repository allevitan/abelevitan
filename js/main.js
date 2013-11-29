//I don't think it's reasonable to load jQuery or Zepto just to do this

window.padding = 50;
window.maxWidth = 960;

function resizeify(){
    var w = window.innerWidth - padding*2;
    if (w > maxWidth){
	w = maxWidth
    }
    document.getElementById("header").style.width = w + "px";
    document.getElementById("main").style.width = w + "px";
    document.getElementById("footer").style.width = w + "px";
}

window.onload = function(){
    resizeify();
}

window.onresize = function(){
    resizeify();
}
