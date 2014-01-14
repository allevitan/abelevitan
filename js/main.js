//I don't think it's reasonable to load jQuery or Zepto just to do this
//So I won't

function externify(){
// makes all external links default to opening in new tab
    var links = document.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
	if (links[i].getAttribute('href').slice(0,7) == 'http://'){
	    links[i].setAttribute('target','_newtab');
	}
    }
}

window.onload = function(){
    externify();
}


/*

Currently commented out of the default template because it goes sucky on mobile

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

*/
