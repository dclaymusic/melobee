let words = [
'ace',
'add',
'bed',
'bee',
'beg',
'cab',
'bag',
'age',
'bad',
'dad',
'dab',
'ebb',
'fab',
'fad',
'fed',
'fee',
'gab',
'gag',
'egg',
'bade',
'babe',
'aged',
'aced',
'deed',
'dead',
'deaf',
'edge',
'face',
'fade',
'feed',
'gaff',
'gage',
'cafe',
'cage',
'cede',
'beef',
'bead',
'adage',
'added',
'badge',
'caged',
'ceded',
'decaf',
'ebbed',
'edged',
'faced',
'gaffe',
'faded',
'egged',
'accede',
'badged',
'bagged',
'beaded',
'begged',
'dabbed',
'decade',
'facade',
'gabbed',
'gagged',
'efface',
'deface',
'baggage',
'cabbage',
'defaced',
'effaced' ];


function findPossibleWords(pitch)
{
    for(let i = 0; i < words.length; i++)
    {
        for(let j = 0; j < words[j].length; j++)
        {
            if(words[i][j] == centerPitch)
            { 
                possibleWords.push(words[i]);
                break;
            }
        }
    }


}