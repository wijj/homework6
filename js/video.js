var video;
var slider;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video and add volume to html");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume *100 +'%';

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate*=.9
	console.log("slow down video new speed is " +video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate*=(10/9);
	console.log("speed up video new speed is " +video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime+5 >=32.996875){
		video.currentTime=0;
	} else {
		video.currentTime+=5;
	};
	video.play();
	console.log("new time for video is " +video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML='Mute';
		console.log("unmuted video");
	} else{
		video.muted=true;
		document.querySelector("#mute").innerHTML='Unmute';
		console.log("muted video");
	};
});

slider = document.querySelector("#volumeSlider");
slider.onchange = function() {
	video.volume=(this.value/100)
	document.querySelector("#volume").innerHTML=video.volume *100 +'%';
	console.log("volume is "+ (video.volume *100) +'%');
};

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log('old school');
});
document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log('original');
});

