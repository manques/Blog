/*search*/
//document.getElementById("search_icon").addEventListener("click",searchq);
//document.getElementById("searchIcon").addEventListener("click", searchq);
function searchOpen(){
	document.getElementById("search").style.display="block";
}
function searchClose(){
	document.getElementById("search").style.display="none";
}

/*nav bars*/

function bar(){
	//var parent=document.getElementById("navAll");
	var child=document.getElementById("navTitle");
	var hhh=document.getElementById("otherClose");
	//parent.style.position="relative";
	//child.style.position="absolute";
	//child.style.zIndex=10;
	child.style.display="block";
	hhh.style.display="block";

	//child.style.bottom=0px;

}
function otherCloseFun(){
	var child=document.getElementById("navTitle");
	var hhh=document.getElementById("otherClose");
	child.style.display="none";
	hhh.style.display="none";
}

/*
toggle();
window.onresize = function() {
    toggle();
}

function toggle() {
        document.getElementById("navTitle").style.display = "none";      
}
*/
/*Envelope*/
function envelope(){
	document.getElementById("envelope").style.display="block";
}
function envelopeClose(){
	document.getElementById("envelope").style.display="none";
}