//clef screen only called once sounds are loaded
function selectClefScreen() {

    if(allBuffersLoaded)
    {
        document.getElementById('loadscreen').style.visibility = 'hidden';
        document.getElementById('clefscreen').style.display = 'block';
        loadBgMusic(); playBgMusic();
        loadclick(); playclick();
    }
}

function setClef(num)
{
    clef = num;
    if(clef == 0) { 
        document.getElementById('letter').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('treble').style.border = '2px black solid';
        document.getElementById('bass').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('alto').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('clef').src = 'img/clefs/clef-treble.png';
        playWord(['c-hi','g']);
    }
    if(clef == 1) { 
        document.getElementById('letter').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('treble').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('bass').style.border = '2px black solid';
        document.getElementById('alto').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('clef').src = 'img/clefs/clef-bass.png';
        playWord(['c','g']);
    }
    if(clef == 2) { 
        document.getElementById('letter').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('treble').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('bass').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('alto').style.border = '2px black solid';
        document.getElementById('clef').src = 'img/clefs/clef-alto.png';
        playWord(['c','g']);
    }
    if(clef == 4) { 
        document.getElementById('letter').style.border = '2px black solid';
        document.getElementById('treble').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('bass').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('alto').style.border = '2px solid rgba(0,0,0,0)';
        document.getElementById('clef').src = 'img/clefs/clef-treble.png';
        playWord(['c-hi','g']);
    }

    document.getElementById('start').style.visibility = 'visible';
}

//initialize game and countdown clock
function startGame() { 

    if(!hasStarted)
    {
        loadclick(); playclick();

        index = 0;
        
        var pitches = [];
        //treble clef
        if(clef==0 || clef==4)
        {
            pitches = ['a','b','c-hi','d','e','f','g'];
            let thisD = randomInt(1); if(thisD == 0) { pitches[3] = 'd-hi'; }
            let thisE = randomInt(1); if(thisE == 0) { pitches[4] = 'e-hi'; }
            let thisF = randomInt(1); if(thisF == 0) { pitches[5] = 'f-hi'; }
            let thisG = randomInt(1); if(thisG == 0) { pitches[6] = 'g-hi'; }
        }
        //bass clef
        if(clef==1)
        {
            pitches = ['a','b','c','d','e','f','g'];
            let thisB = randomInt(1); if(thisB == 0) { pitches[1] = 'b-hi'; }
            let thisA = randomInt(1); if(thisA == 0) { pitches[0] = 'a-hi'; }
            let thisG = randomInt(1); if(thisG == 0) { pitches[6] = 'g-hi'; }
            let thisF = randomInt(1); if(thisF == 0) { pitches[5] = 'f-hi'; }   
        }
        //alto clef
        if(clef==2)
        {
            pitches = ['a','b','c','d','e','f','g'];
            let thisA = randomInt(1); if(thisA == 0) { pitches[0] = 'a-hi'; }
            let thisG = randomInt(1); if(thisG == 0) { pitches[6] = 'g-hi'; }
            let thisF = randomInt(1); if(thisF == 0) { pitches[5] = 'f-hi'; }
            let thisE = randomInt(1); if(thisE == 0) { pitches[4] = 'e-hi'; }
        }

        document.getElementById('loadscreen').style.visibility = 'hidden';
        document.getElementsByTagName('main')[0].style.visibility = 'visible';
        hasStarted = true;

        pitchChoices = scramblePitches(pitches);
        //extract just the first letter from the pitch for word comparison
        centerPitch = pitchChoices[0][0];

        findPossibleWords(centerPitch);

        document.getElementById('score-text').innerHTML = 'Words Found: ' + score + ' / ' + possibleWords.length;
        let d = document.getElementById('button');
        d.style.padding = '10px ' + ((2/possibleWords.length) * 30) + '%';

        drawPitches();

        //set counter
        startTime = 0;
        timer = setInterval(function() {
            timeElapsed =  startTime++;
            displayTime = toHMS(timeElapsed);
            document.getElementById('time-left').innerHTML = displayTime;
            if(timeElapsed >= timeLimit)
            { endGame(); }
        }, 1000);
    }
}

function randomInt(max)
{
	rand_val = Math.floor(Math.random() * Math.floor(max + 1))
	return rand_val;
}


//final display slide
function endGame()
{
    if(!hasEnded)
    {
        console.log(score, foundWords.length);
        setTimeout(() => { bgmusicgain.gain.linearRampToValueAtTime(-0.001, (audioCtx.currentTime) + 10.0); }, audioCtx.currentTime); 

        clearInterval(timer);
        hasEnded = true;
        endTime = displayTime;
        
        //if all words found
        if(foundWords.length == possibleWords.length) 
        { 
            document.getElementById('endimg').src = 'img/endbee1.png';
            document.getElementById('endhead').style.display = 'none';
            document.getElementById('yourtime').innerHTML = 'Your Time:';
            document.getElementById('endtime').innerHTML = endTime;
        }
        else 
        {
            document.getElementById('yourtime').remove();
            document.getElementById('encouragement').style.display = 'block';
            document.getElementById('endimg').style.marginBottom = '-30px';
        }
        document.getElementById('endwords').innerHTML = foundWords.length + ' / ' + possibleWords.length;
        document.getElementById('centerpitch').innerHTML = centerPitch[0][0].toUpperCase();
        let thisClef;
        if(clef == 0) { thisClef = 'Treble'; }
        if(clef == 1) { thisClef = 'Bass'; }
        if(clef == 2) { thisClef = 'Alto'; }
        if(clef == 4) { thisClef = 'Letter'; }
        document.getElementById('endclef').innerHTML = thisClef;

        document.getElementById('endscreen').style.display = 'block';
        
    }
}