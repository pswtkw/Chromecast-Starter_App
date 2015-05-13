document.getElementById("launchApp").addEventListener('click', function(){
	launchApp();
});
document.getElementById("loadMedia").addEventListener('click', function(){
	loadMedia();
});
document.getElementById("stopApp").addEventListener('click', function(){
	stopApp();
});
document.getElementById("stopMedia").addEventListener('click', function(){
	stopMedia();
});
/*var joinSessionBySessionId = document.querySelectorAll(".joinSessionBySessionId").addEventListener('click', function(){
	joinSessionBySessionId();
});
var muteMedia = document.querySelectorAll(".muteMedia").addEventListener('click', function(){
	muteMedia();
});*/
var vc = document.getElementById("volumeControl");
vc.addEventListener('mouseup', function(){
	setReceiverVolume(this.value/100,false);
});

var pr = document.getElementById("progress");
pr.addEventListener('mouseup', function(){
	seekMedia(this.value);
});

var selectMedia = document.querySelectorAll('.selectMedia');
for(var i=0;i < selectMedia.length; i++){
  selectMedia[i].addEventListener('click', function(){
    selectMedia(i);
  });
}