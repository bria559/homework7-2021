var video =document.querySelector('#player1');
var vidVolume = document.querySelector('#volume');
var vidMute = document.querySelector("#mute");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	vidVolume.innerHTML = (video.volume * 100) + '%';
	console.log(video.currentTime);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

vidMute.addEventListener("click", function() {
	if (video.muted === false) { 
		video.muted = true;
		vidMute.innerHTML = 'Unmute';
 	}
	else{
		video.muted = false;
		vidMute.innerHTML = 'Mute';
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 15 <= video.duration){
	video.currentTime = video.currentTime + 15;
	console.log(video.currentTime);
	}
	else{
		video.load();
		console.log(video.currentTime);
	}
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old Video speed is " + video.playbackRate);
	rate = video.playbackRate * 0.95;
	video.playbackRate = rate;
	console.log("New video speed is " + video.playbackRate);
	//figure out how to make it progressively slower with each click
	// link to answer should be on last week's js slides
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old Video speed is " + video.playbackRate);
	rate = (video.playbackRate * .05) + video.playbackRate;
	video.playbackRate = rate;
	console.log("New video speed is " + video.playbackRate);
	//figure out how to make it progressively faster with each click
	// link to answer should be on last week's js slides
});
// NOT DONE

document.querySelector("#slider").addEventListener("change", function() {
	var volRange = document.querySelector("#volume");
	var volRangeValue = this.value;
	console.log(volRangeValue);
	video_volume = volRangeValue / 1000;
	video.volume = video_volume;
	volRange.innerHTML = (video.volume *1000) + "%";
});
