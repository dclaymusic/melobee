//declare audio buffers & all load / play functions
let clickbuff = null;
let shufflebuff = null;
let tabuff = null;
let tbbuff = null;
let tchibuff = null;
let tdbuff = null;
let tdhibuff = null;
let tebuff = null;
let tehibuff = null;
let tfbuff = null;
let tfhibuff = null;
let tgbuff = null;
let tghibuff = null;

let bebuff = null;
let bdbuff = null;
let bcbuff = null;
let bbbuff = null;
let bbhibuff = null;
let babuff = null;
let bahibuff = null;
let bgbuff = null;
let bghibuff = null;
let bfbuff = null;
let bfhibuff = null;

let adbuff = null;
let acbuff = null;
let abbuff = null;
let aabuff = null;
let aahibuff = null;
let agbuff = null;
let aghibuff = null;
let afbuff = null;
let afhibuff = null;
let aebuff = null;
let aehibuff = null;

let bgmusicbuff = null;
let bassbuff = null;
let nope1buff = null;
let nope2buff = null;
let nope3buff = null;
let nope4buff = null;

//check buffers
function checkBuffers()
{
    let buffCount = 0;

	if(clickbuff != null) { buffCount++; }
	if(shufflebuff != null) { buffCount++; }
	if(tabuff != null) { buffCount++; }
	if(tbbuff != null) { buffCount++; }
	if(tchibuff != null) { buffCount++; }
	if(tdbuff != null) { buffCount++; }
	if(tdhibuff != null) { buffCount++; }
	if(tebuff != null) { buffCount++; }
	if(tehibuff != null) { buffCount++; }
	if(tfbuff != null) { buffCount++; }
	if(tfhibuff != null) { buffCount++; }
	if(tgbuff != null) { buffCount++; }
	if(tghibuff != null) { buffCount++; }
	if(bebuff != null) { buffCount++; }
	if(bdbuff != null) { buffCount++; }
	if(bcbuff != null) { buffCount++; }
	if(bbbuff != null) { buffCount++; }
	if(bbhibuff != null) { buffCount++; }
	if(babuff != null) { buffCount++; }
	if(bahibuff != null) { buffCount++; }
	if(bgbuff != null) { buffCount++; }
	if(bghibuff != null) { buffCount++; }
	if(bfbuff != null) { buffCount++; }
	if(bfhibuff != null) { buffCount++; }
	if(adbuff != null) { buffCount++; }
	if(acbuff != null) { buffCount++; }
	if(abbuff != null) { buffCount++; }
	if(aabuff != null) { buffCount++; }
	if(aahibuff != null) { buffCount++; }
	if(agbuff != null) { buffCount++; }
	if(aghibuff != null) { buffCount++; }
	if(afbuff != null) { buffCount++; }
	if(afhibuff != null) { buffCount++; }
	if(aebuff != null) { buffCount++; }
	if(aehibuff != null) { buffCount++; }
	if(bgmusicbuff != null) { buffCount++; }
	if(bassbuff != null) { buffCount++; }
	if(nope1buff != null) { buffCount++; }
	if(nope2buff != null) { buffCount++; }
	if(nope3buff != null) { buffCount++; }
	if(nope4buff != null) { buffCount++; }

    return buffCount;
}


function selectSound(note)
{
	if(soundOn)
	{
		if(clef == 0 || clef == 4)
		{
			if(note == 'g-hi' || note == 'g-hi2') { loadTghi(); playTghi(); }
			if(note == 'f-hi' || note == 'f-hi2') { loadTfhi(); playTfhi(); }
			if(note == 'e-hi' || note == 'e-hi2') { loadTehi(); playTehi(); }
			if(note == 'd-hi' || note == 'd-hi2') { loadTdhi(); playTdhi(); }
			if(note == 'c-hi' || note == 'c-hi2') { loadTchi(); playTchi(); }
			if(note == 'b' || note == 'b2') { loadTb(); playTb(); }
			if(note == 'a' || note == 'a2') { loadTa(); playTa(); }
			if(note == 'g' || note == 'g2') { loadTg(); playTg(); }
			if(note == 'f' || note == 'f2') { loadTf(); playTf(); }
			if(note == 'e' || note == 'e2') { loadTe(); playTe(); }
			if(note == 'd' || note == 'd2') { loadTd(); playTd(); }
		}
		if(clef == 1)
		{
			if(note == 'b-hi' || note == 'b-hi2') { loadBbhi(); playBbhi(); }
			if(note == 'a-hi' || note == 'a-hi2') { loadBahi(); playBahi(); }
			if(note == 'g-hi' || note == 'g-hi2') { loadBghi(); playBghi(); }
			if(note == 'f-hi' || note == 'f-hi2') { loadBfhi(); playBfhi(); }
			if(note == 'b' || note == 'b2') { loadBb(); playBb(); }
			if(note == 'a' || note == 'a2') { loadBa(); playBa(); }
			if(note == 'g' || note == 'g2') { loadBg(); playBg(); }
			if(note == 'f' || note == 'f2') { loadBf(); playBf(); }
			if(note == 'e' || note == 'e2') { loadBe(); playBe(); }
			if(note == 'd' || note == 'd2') { loadBd(); playBd(); }
			if(note == 'c' || note == 'c2') { loadBc(); playBc(); }
		}
		if(clef == 2)
		{
			if(note == 'a-hi' || note == 'a-hi2') { loadAahi(); playAahi(); }
			if(note == 'g-hi' || note == 'g-hi2') { loadAghi(); playAghi(); }
			if(note == 'f-hi' || note == 'f-hi2') { loadAfhi(); playAfhi(); }
			if(note == 'e-hi' || note == 'e-hi2') { loadAehi(); playAehi(); }
			if(note == 'd' || note == 'd2') { loadAd(); playAd(); }
			if(note == 'c' || note == 'c2') { loadAc(); playAc(); }
			if(note == 'b' || note == 'b2') { loadAb(); playAb(); }
			if(note == 'a' || note == 'a2') { loadAa(); playAa(); }
			if(note == 'g' || note == 'g2') { loadAg(); playAg(); }
			if(note == 'f' || note == 'f2') { loadAf(); playAf(); }
			if(note == 'e' || note == 'e2') { loadAe(); playAe(); }
		}
	}
	else { loadclick(); playclick(); }

}

function playWord(aWord)
{
	let time = 0;
	for(let i = 0; i < aWord.length; i++)
	{
		setTimeout(() => { selectSound(aWord[i]); }, time);
		time += 250;
	}
}

function playNope()
{
	if(soundOn)
	{
		let r = randomInt(3);
		if(r == 0) { loadnope1(); playnope1(); }
		if(r == 1) { loadnope2(); playnope2(); }
		if(r == 2) { loadnope3(); playnope3(); }
		if(r == 3) { loadnope4(); playnope4(); }
	}
	else{ loadclick(); playclick(); }
}

function toggleSound()
{
	soundOn = !soundOn;

	loadbass(); playbass();
	if(soundOn)
	{
		bgmusicgain.gain.setValueAtTime(1.0, audioCtx.currentTime);
		document.getElementById('sound').src = 'img/soundon.png';
	}
	if(!soundOn)
	{
		bgmusicgain.gain.setValueAtTime(0.0, audioCtx.currentTime);
		document.getElementById('sound').src = 'img/soundoff.png';
	}


}

const loadBgMusic = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/bgmusic.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bgmusicbuff = data);
	};
	request.send();
};

const playBgMusic = () => {
	bgmusic.buffer = bgmusicbuff;
	bgmusic.loop=true;
	//console.log(buffer)
	bgmusic.connect(bgmusicgain).connect(audioCtx.destination);
	bgmusic.start(audioCtx.currentTime); // play the source immediately
};


const loadshuffle = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/shuffle.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => shufflebuff = data);
	};
	request.send();
};

const playshuffle = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = shufflebuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};



const loadbass = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/bass.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bassbuff = data);
	};
	request.send();
};

const playbass = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bassbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/click.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => clickbuff = data);
	};
	request.send();
};

const playclick = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = clickbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};




const loadTghi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/g-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tghibuff = data);
	};
	request.send();
};

const playTghi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tghibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadTfhi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/f-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tfhibuff = data);
	};
	request.send();
};

const playTfhi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tfhibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadTehi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/e-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tehibuff = data);
	};
	request.send();
};

const playTehi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tehibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadTdhi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/d-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tdhibuff = data);
	};
	request.send();
};

const playTdhi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tdhibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadTchi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/c-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tchibuff = data);
	};
	request.send();
};

const playTchi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tchibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadTb = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/b.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tbbuff = data);
	};
	request.send();
};

const playTb = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tbbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadTa = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/a.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tabuff = data);
	};
	request.send();
};

const playTa = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tabuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadTg = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/g.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tgbuff = data);
	};
	request.send();
};

const playTg = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tgbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadTf = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/f.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tfbuff = data);
	};
	request.send();
};

const playTf = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tfbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadTe = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/e.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tebuff = data);
	};
	request.send();
};

const playTe = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tebuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadTd = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/0/d.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => tdbuff = data);
	};
	request.send();
};

const playTd = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = tdbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};



const loadBf = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/f.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bfbuff = data);
	};
	request.send();
};

const playBf = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bfbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadBg = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/g.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bgbuff = data);
	};
	request.send();
};

const playBg = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bgbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadBa = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/a.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => babuff = data);
	};
	request.send();
};

const playBa = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = babuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadBb = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/b.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bbbuff = data);
	};
	request.send();
};

const playBb = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bbbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadBc = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/c.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bcbuff = data);
	};
	request.send();
};

const playBc = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bcbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadBd = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/d.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bdbuff = data);
	};
	request.send();
};

const playBd = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bdbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadBe = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/e.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bebuff = data);
	};
	request.send();
};

const playBe = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bebuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadBfhi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/f-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bfhibuff = data);
	};
	request.send();
};

const playBfhi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bfhibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadBghi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/g-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bghibuff = data);
	};
	request.send();
};

const playBghi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bghibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadBahi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/a-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bahibuff = data);
	};
	request.send();
};

const playBahi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bahibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadBbhi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/1/b-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => bbhibuff = data);
	};
	request.send();
};

const playBbhi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = bbhibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};



const loadAahi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/a-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => aahibuff = data);
	};
	request.send();
};

const playAahi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = aahibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadAghi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/g-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => aghibuff = data);
	};
	request.send();
};

const playAghi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = aghibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadAfhi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/f-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => afhibuff = data);
	};
	request.send();
};

const playAfhi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = afhibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadAehi = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/e-hi.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => aehibuff = data);
	};
	request.send();
};

const playAehi = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = aehibuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadAd = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/d.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => adbuff = data);
	};
	request.send();
};

const playAd = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = adbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadAc = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/c.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => acbuff = data);
	};
	request.send();
};

const playAc = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = acbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadAb = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/b.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => abbuff = data);
	};
	request.send();
};

const playAb = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = abbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadAa = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/a.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => aabuff = data);
	};
	request.send();
};

const playAa = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = aabuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadAg = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/g.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => agbuff = data);
	};
	request.send();
};

const playAg = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = agbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadAf = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/f.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => afbuff = data);
	};
	request.send();
};

const playAf = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = afbuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadAe = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/2/e.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => aebuff = data);
	};
	request.send();
};

const playAe = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = aebuff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};


const loadnope1 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nope1.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nope1buff = data);
	};
	request.send();
};

const playnope1 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = nope1buff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadnope2 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nope2.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nope2buff = data);
	};
	request.send();
};

const playnope2 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = nope2buff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadnope3 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nope3.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nope3buff = data);
	};
	request.send();
};

const playnope3 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = nope3buff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};

const loadnope4 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nope4.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nope4buff = data);
	};
	request.send();
};

const playnope4 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = nope4buff;
	//console.log(buffer)
  	source.connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
};