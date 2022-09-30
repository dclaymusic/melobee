
//score screen grows
function expandScore()
{
    scoreAlpha = ((possibleWords.length / possibleWords.length) * 0.8) + 0.2;

    let d = document.getElementById('button');
    d.style.padding = '10px ' + (((foundWords.length + 1)/possibleWords.length) * 30) + '%';
}

//message alert with information about current word
function postAlert(message, color)
{
    document.getElementById('alert').style.backgroundColor = color;
    document.getElementById('alert').style.display = 'block';
    document.getElementById('alert-text').innerHTML = message;

    setTimeout(() => { 
        document.getElementById('alert').style.display = 'none';
      }, 2000)
}

//view info screen
function toggleInfo()
{
    loadclick(); playclick();
    isInfoScreen = !isInfoScreen;
    if(isInfoScreen) { document.getElementById('infoscreen').style.display = 'block'; }
    else { document.getElementById('infoscreen').style.display = 'none'; }
}

//turn timer display on and off
function toggleTime()
{
    loadclick(); playclick();
    isTimeScreen = !isTimeScreen;
    if(isTimeScreen) { 
        document.getElementById('time').src = 'img/timeon.png';
        document.getElementById('timescreen').style.display = 'block'; 
    }
    else { 
        document.getElementById('time').src = 'img/timeoff.png';
        document.getElementById('timescreen').style.display = 'none'; 
    }
}

//shuffle button mixes up all pitches except the center one
function scrambleAllButCenterPitch()
{
    loadshuffle(); playshuffle();
    let pitchesToScramble = [];
    for(i = 1; i < pitchChoices.length; i++)
    { pitchesToScramble.push(pitchChoices[i]); }

    newOrder = scramblePitches(pitchesToScramble);
    pitchChoices = [pitchChoices[0]];
    pitchChoices = pitchChoices.concat(newOrder);

    deletePitches();
    drawPitches();

}

//hour minute second time conversion
function toHMS(time)
{
	var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}