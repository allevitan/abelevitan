//I don't think it's reasonable to load jQuery or Zepto just to do this

window.padding = 50;
window.maxWidth = 960;
window.tripWidth = 600;
window.minWidth = 200;

function resizeify(){
    var w = window.innerWidth;

    // deciding whether to engage the mobile layout
    if (w > tripWidth){
	document.getElementsByTagName("body")[0].classList.remove("mobile");
    } else {
	document.getElementsByTagName("body")[0].classList.add("mobile");
    }

    // sizing the main content boxes
    if (w > maxWidth){
	w = maxWidth;
    } else if (w < minWidth) {
	w = minWidth;
    }
    document.getElementById("header").style.width = (w - padding*2) + "px";
    document.getElementById("main").style.width = (w - padding*2) + "px";
    document.getElementById("footer").style.width = (w - padding*2) + "px";
}

window.onload = function(){
    resizeify();
}

window.onresize = function(){
    resizeify();
}
