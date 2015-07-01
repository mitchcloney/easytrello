if(typeof chrome !== 'undefined'){
	document.addEventListener('DOMContentLoaded', function () {

	  var frame = document.getElementById("frame");
	  var image;

	  frame.addEventListener('click',function(event){

	  	var target = event.target;
	  	if(target !== 'undefined'){
	  		image = target.parentNode.id;
	  	}else{
	  		image = 'bg';
	  	}

	  	chrome.runtime.sendMessage(image);
	  });

	});
	chrome.runtime.onMessage.addListener(function(image){

		var imgUrl = chrome.extension.getURL('image/'+image+'.png');

		chrome.tabs.getSelected(null, function(tab){
			chrome.tabs.insertCSS(tab.id,{

				code: "#surface{background: url("+imgUrl+") #026aa7 no-repeat center center fixed;-webkit-background-size: cover;}"
			
			});
		})
		
	});

	var list = document.getElementsByClassName("list");

	for(var i=0;i<list.length;i++){
		list[i].style.backgroundColor = "rgba(233,233,233,0.6)";
	}

	
}