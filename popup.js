var ads_class_names=["cr-content", "content_right"]
var ads_ID_names=["content_right","s_main"]

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    if (elements!=null)
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
	elements[0].parentNode.remove()
    }
}

//now remove the dom by ID
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function clean(){
	for(var i=0;i<ads_class_names.length;i++){
                removeElementsByClass(ads_class_names[i])
	}
	for(var i=0;i<ads_ID_names.length;i++){
        	if(document.getElementById(ads_ID_names[i])!=null)
        	document.getElementById(ads_ID_names[i]).remove();
	}

	var divs = document.getElementsByTagName("div"), i=divs.length;
	
	while (i--) {
   		if (!isNaN(divs[i].getAttribute(["id"]))&&divs[i].getAttribute(["id"]) >= 4000){
     			divs[i].remove()
   		}
	}
}

//run the clean function on page load
window.addEventListener ("load", clean, false);
//the search button
document.getElementById('form').addEventListener("submit", clean);
//run the clean function every 1000 secs
setInterval(clean, 1000);	
