//mix up pitch array into a random order for sound bank
function scramblePitches(origArray)
{
    let oldArray = [];
    oldArray = origArray;
    let newArray = [];
    let i = oldArray.length;
    let j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        newArray.push(oldArray[j]);
        oldArray.splice(j,1);
    }
    return(newArray);
}

//draw selected pitch array to tiles in sound bank
function drawPitches()
{
    for(let i = 0; i < pitchChoices.length; i ++)
    {
        let img = document.createElement("img");
        img.id = 'i' + i;
        img.className = 'notes';
        //first pitch in array will always be the "fixed" center pitch;
        if(clef == 4)
        {
            if(i == 0) { img.src = `img/notes/0/` + pitchChoices[i] + '2l.png'; }
            else{ img.src = `img/notes/0/` + pitchChoices[i] + 'l.png'; }   
        }
        else
        {
            if(i == 0) { img.src = `img/notes/${clef}/` + pitchChoices[i] + '2.png'; }
            else{ img.src = `img/notes/${clef}/` + pitchChoices[i] + '.png'; }
        }
        img.onclick = function() {  
            addPitch(i);
        };
        document.getElementById('pitch-choices').appendChild(img);
    }
}

//clear pitches from soundbank
function deletePitches()
{
    for(let i = 0; i < pitchChoices.length; i ++)
    {
        document.getElementById("i" + i).remove();
    };
}

//add a pitch to current word
function addPitch(i)
{
    selectSound(pitchChoices[i]);

    if(index >= 7)
    {
        postAlert("Word is too long!", '#f8ac92');
        if(soundOn) { setTimeout(() => { playNope(); }, 250); }
    }
    else
    {
        let img = document.createElement("img");
        img.id = 'l' + index;
        img.className = 'current-notes';
        //first pitch in array will always be the "fixed" center pitch;

        if(clef == 4)
        {
            if(i == 0) { img.src = `img/notes/0/sel` + pitchChoices[i] + '2.png'; }
            else { img.src = `img/notes/0/sel` + pitchChoices[i] + '.png'; }
        }
        else
        {
            if(i == 0) { img.src = `img/notes/${clef}/sel` + pitchChoices[i] + '2.png'; }
            else { img.src = `img/notes/${clef}/sel` + pitchChoices[i] + '.png'; }
        }

        document.getElementById('current-word').appendChild(img);
        currentWord.push(pitchChoices[i]);
        index++;
    }
}

//delete last pitch from a word
function deleteLastPitch()
{
    loadclick(); playclick();
    if(index > 0)
    {
        document.getElementById('l' + (index-1)).remove(); 
        currentWord.splice(index-1,1);
        index--;
    }
}

//check to see if chosen word exists in "words" list
function checkWord()
{
    if(index <= 2)
    {
        playNope();
        postAlert("Please use 3 or more letters", '#f8ac92');
    }
    else
    {
        //assemble word into a string to check
        let thisWord = '';
        for(let i = 0; i < index; i++)
        {
            let thisPitch = Array.from(currentWord[i]);
            thisWord += thisPitch[0];
        }

        //check string against words yet to be found
        for(let i = 0; i < words.length; i++)
        {
            let possibleMatch = words[i];
            let matches = 0;
            let containsCenterPitch = false;
            for(let j = 0; j < thisWord.length; j++)
            {
                if(thisWord[j] == possibleMatch[j])
                { matches++; }
                if(thisWord[j] == centerPitch)
                { containsCenterPitch = true; }
            }

            //if these words are the same length and all of the letters match
            if(thisWord.length == possibleMatch.length && 
                matches == possibleMatch.length) 
            {

                if(containsCenterPitch)
                {
                    let noCurrentMatches = true;
                    //check against
                    for(let j = 0; j < words.length; j++)
                    {
                        //check against words
                        let foundWord = foundWords[j];
                        if(possibleMatch == foundWord)
                        {
                            noCurrentMatches = false;
                            playNope();
                            postAlert("You have already found this word.", "#e8eeff");
                            break;
                        }
                    }
                    if(noCurrentMatches)
                    {
                        if(score == 0)
                        { document.getElementById('nowordsyet').remove(); }
                        postAlert("You found the word " + possibleMatch.toUpperCase() + "!", '#97ffa1');
                        foundWords.push(possibleMatch);
                        let li = document.createElement("li");
                        li.innerHTML = possibleMatch.toUpperCase();
                        document.getElementById('found-list').appendChild(li);
                        
                        playWord(currentWord);
                        score++;
                        expandScore();
                        document.getElementById('score-text').innerHTML = 'Words Found: ' + score + ' / ' + possibleWords.length;
                        //if(score == 1)
                        if(score == possibleWords.length) 
                        { endGame(); }
                        break;
                    }
                    else { break; }
                }
                else
                {
                    playNope();
                    postAlert("Word must include the center pitch.", '#e8eeff');
                    break;
                }
            }
            //if we've gone thru the whole list with no match
            if(i == words.length-1)
            { 
                //window appears above
                playNope();
                postAlert("This word doesn't exist.", '#f8ac92');
            }
        }

    }

    // clear current word no matter what
    for(let i = 0; i < index; i++)
    { 
        document.getElementById('l' + i).remove(); 
    }
    index = 0;
    currentWord = [];
}
