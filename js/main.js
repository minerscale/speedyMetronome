var upbeat = new Audio('samples/Upbeat.wav');
var downbeat = new Audio('samples/Downbeat.wav');

var beatNo = 0;
var playing = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var bpm;
async function playLoop(){
	while(playing == 1){
		if (beatNo % document.getElementById("tsigbox").value == 0){
			upbeat.play();
			bpm += 1;
		}else{
			downbeat.play();
		}
		await sleep(60000/bpm);
		beatNo += 1;
	}
	return
}

async function play(){
	bpm = Number(document.getElementById("bpmbox").value);
	if (playing == 0){
		playing = 1;
		document.getElementById("play").innerHTML = "stop";
	}else if (playing == 1){
		playing = 2;
		document.getElementById("play").innerHTML = "play";
		await sleep(60000/bpm);
		playing = 0;
		
		return;
	}else{
		return;
	}

	beatNo = 0;
	playLoop();
}
