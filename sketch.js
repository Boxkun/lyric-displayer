let audioEl;
let lyricDiv;
let currentLyric = '';
let lyrics = [
    {
        "text": "[What Angel Wakes Me]",
        "beats": 71,
    },
    {
      "text": "Dancing on the wind",
      "beats": 3
    },
    {
      "text": "Up and down again",
      "beats": 3
    },
    {
      "text": "Round and round the bend",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "From a flow'ry bed",
      "beats": 3
    },
    {
      "text": "To the clouds ascend",
      "beats": 3
    },
    {
      "text": "Tumble down again",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Yet with each descent",
      "beats": 3
    },
    {
      "text": "Do we rise again",
      "beats": 3
    },
    {
      "text": "To our hearts' content",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Fly away my friend",
      "beats": 3
    },
    {
      "text": "For a day and then",
      "beats": 3
    },
    {
      "text": "We'll begin again",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Till down turn the skies",
      "beats": 11
    },
    {
      "text": "Wonted quiet, wanton silence",
      "beats": 13
    },
    {
      "text": "For long do we lie",
      "beats": 11
    },
    {
      "text": "Wond'ring when we'll be",
      "beats": 13
    },
    {
      "text": "Dancing on the wind",
      "beats": 3
    },
    {
      "text": "Up and down again",
      "beats": 3
    },
    {
      "text": "Round and round the bend",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "From a flow'ry bed",
      "beats": 3
    },
    {
      "text": "To the clouds ascend",
      "beats": 3
    },
    {
      "text": "Tumble down again",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Yet with each descent",
      "beats": 3
    },
    {
      "text": "Do we rise again",
      "beats": 3
    },
    {
      "text": "To our hearts' content",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Fly away my friend",
      "beats": 3
    },
    {
      "text": "For a day and then",
      "beats": 3
    },
    {
      "text": "We'll begin again",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Still down turn the skies",
      "beats": 11
    },
    {
      "text": "Gentle song gently wand'ring",
      "beats": 13
    },
    {
      "text": "Along in the night",
      "beats": 11
    },
    {
      "text": "Joyous cries ring free",
      "beats": 14
    },
    {
      "text": "La la la la la",
      "beats": 3
    },
    {
      "text": "Lying lost in thought",
      "beats": 3
    },
    {
      "text": "Do you love me not?",
      "beats": 3
    },
    {
      "text": "Follow these",
      "beats": 3
    },
    {
      "text": "Petals cast aloft",
      "beats": 3
    },
    {
      "text": "La la la la la",
      "beats": 3
    },
    {
      "text": "Will you, when I'm gone, remember me?",
      "beats": 6
    },
    {
      "text": "Ring a ling a ling",
      "beats": 3
    },
    {
      "text": "Lovers in the spring",
      "beats": 3
    },
    {
      "text": "How the garden sings",
      "beats": 3
    },
    {
      "text": "Ever green",
      "beats": 3
    },
    {
      "text": "Spirits lush, we bring",
      "beats": 3
    },
    {
      "text": "Ring a ling a ling",
      "beats": 3
    },
    {
      "text": "Braving anything",
      "beats": 3
    },
    {
      "text": "Together, we",
      "beats": 3
    },
    {
      "text": "La la la la la",
      "beats": 3
    },
    {
      "text": "Learn to play our part",
      "beats": 3
    },
    {
      "text": "Navigate the dark",
      "beats": 3
    },
    {
      "text": "Up we reach",
      "beats": 3
    },
    {
      "text": "Catch a falling star",
      "beats": 3
    },
    {
      "text": "La la la la la",
      "beats": 3
    },
    {
      "text": "Lock it in our hearts eternally",
      "beats": 6
    },
    {
      "text": "Ring a ling a ling",
      "beats": 3
    },
    {
      "text": "Flying without wings",
      "beats": 3
    },
    {
      "text": "Kites without a string",
      "beats": 3
    },
    {
      "text": "Loop and leap",
      "beats": 3
    },
    {
      "text": "To these crowns we cling",
      "beats": 3
    },
    {
      "text": "Ring a ling a ling",
      "beats": 3
    },
    {
      "text": "For we'll all be kings tomorrow",
      "beats": 6
    },
    {
      "text": "Autumn's whisper soaring high",
      "beats": 6
    },
    {
      "text": "Lulla lulla lullaby",
      "beats": 6
    },
    {
      "text": "Baby's breath and butterflies",
      "beats": 6
    },
    {
      "text": "Sing in our sweet lullaby",
      "beats": 6
    },
    {
      "text": "Summer child with heavy eyes",
      "beats": 6
    },
    {
      "text": "Lulla lulla lullaby",
      "beats": 6
    },
    {
      "text": "Come our lonely angel nigh",
      "beats": 6
    },
    {
      "text": "Sing in our sweet lullaby",
      "beats": 6
    },
    {
      "text": "Time wilts and fades",
      "beats": 9
    },
    {
      "text": "Luster lost in the rain",
      "beats": 15
    },
    {
      "text": "Bows to the blade",
      "beats": 9
    },
    {
      "text": "Till the spring calls again",
      "beats": 14
    },
    // repeat
    {
      "text": "Dancing on the wind",
      "beats": 3
    },
    {
      "text": "Up and down again",
      "beats": 3
    },
    {
      "text": "Round and round the bend",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "From a flow'ry bed",
      "beats": 3
    },
    {
      "text": "To the clouds ascend",
      "beats": 3
    },
    {
      "text": "Tumble down again",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Yet with each descent",
      "beats": 3
    },
    {
      "text": "Do we rise again",
      "beats": 3
    },
    {
      "text": "To our hearts' content",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Fly away my friend",
      "beats": 3
    },
    {
      "text": "For a day and then",
      "beats": 3
    },
    {
      "text": "We'll begin again",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Till down turn the skies",
      "beats": 11
    },
    {
      "text": "Wonted quiet, wanton silence",
      "beats": 13
    },
    {
      "text": "For long do we lie",
      "beats": 11
    },
    {
      "text": "Wond'ring when we'll be",
      "beats": 13
    },
    {
      "text": "Dancing on the wind",
      "beats": 3
    },
    {
      "text": "Up and down again",
      "beats": 3
    },
    {
      "text": "Round and round the bend",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "From a flow'ry bed",
      "beats": 3
    },
    {
      "text": "To the clouds ascend",
      "beats": 3
    },
    {
      "text": "Tumble down again",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Yet with each descent",
      "beats": 3
    },
    {
      "text": "Do we rise again",
      "beats": 3
    },
    {
      "text": "To our hearts' content",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Fly away my friend",
      "beats": 3
    },
    {
      "text": "For a day and then",
      "beats": 3
    },
    {
      "text": "We'll begin again",
      "beats": 2
    },
    {
      "text": "Fa la la la la la",
      "beats": 4
    },
    {
      "text": "Still down turn the skies",
      "beats": 11
    },
    {
      "text": "Gentle song gently wand'ring",
      "beats": 13
    },
    {
      "text": "Along in the night",
      "beats": 11
    },
    {
      "text": "Joyous cries ring free",
      "beats": 14
    },
    {
      "text": "La la la la la",
      "beats": 3
    },
    {
      "text": "Lying lost in thought",
      "beats": 3
    },
    {
      "text": "Do you love me not?",
      "beats": 3
    },
    {
      "text": "Follow these",
      "beats": 3
    },
    {
      "text": "Petals cast aloft",
      "beats": 3
    },
    {
      "text": "La la la la la",
      "beats": 3
    },
    {
      "text": "Will you, when I'm gone, remember me?",
      "beats": 6
    },
    {
      "text": "Ring a ling a ling",
      "beats": 3
    },
    {
      "text": "Lovers in the spring",
      "beats": 3
    },
    {
      "text": "How the garden sings",
      "beats": 3
    },
    {
      "text": "Ever green",
      "beats": 3
    },
    {
      "text": "Spirits lush, we bring",
      "beats": 3
    },
    {
      "text": "Ring a ling a ling",
      "beats": 3
    },
    {
      "text": "Braving anything",
      "beats": 3
    },
    {
      "text": "Together, we",
      "beats": 3
    },
    {
      "text": "La la la la la",
      "beats": 3
    },
    {
      "text": "Learn to play our part",
      "beats": 3
    },
    {
      "text": "Navigate the dark",
      "beats": 3
    },
    {
      "text": "Up we reach",
      "beats": 3
    },
    {
      "text": "Catch a falling star",
      "beats": 3
    },
    {
      "text": "La la la la la",
      "beats": 3
    },
    {
      "text": "Lock it in our hearts eternally",
      "beats": 6
    },
    {
      "text": "Ring a ling a ling",
      "beats": 3
    },
    {
      "text": "Flying without wings",
      "beats": 3
    },
    {
      "text": "Kites without a string",
      "beats": 3
    },
    {
      "text": "Loop and leap",
      "beats": 3
    },
    {
      "text": "To these crowns we cling",
      "beats": 3
    },
    {
      "text": "Ring a ling a ling",
      "beats": 3
    },
    {
      "text": "For we'll all be kings tomorrow",
      "beats": 6
    },
    {
      "text": "Autumn's whisper soaring high",
      "beats": 6
    },
    {
      "text": "Lulla lulla lullaby",
      "beats": 6
    },
    {
      "text": "Baby's breath and butterflies",
      "beats": 6
    },
    {
      "text": "Sing in our sweet lullaby",
      "beats": 6
    },
    {
      "text": "Summer child with heavy eyes",
      "beats": 6
    },
    {
      "text": "Lulla lulla lullaby",
      "beats": 6
    },
    {
      "text": "Come our lonely angel nigh",
      "beats": 6
    },
    {
      "text": "Sing in our sweet lullaby",
      "beats": 6
    },
    {
      "text": "Time wilts and fades",
      "beats": 9
    },
    {
      "text": "Luster lost in the rain",
      "beats": 15
    },
    {
      "text": "Bows to the blade",
      "beats": 9
    },
    {
      "text": "Till the spring calls again",
      "beats": 15
    },
];
let bpm = 180;
let beatDuration = 60 / bpm;
let totalBeatsElapsed = 0;

function setup() {
    noCanvas();
    audioEl = createAudio('/What_Angel_Wakes_Me.mp3');
    audioEl.showControls();
  
    lyricDiv = createDiv('');
    lyricDiv.style('font-size', '48px');
    lyricDiv.style('padding', '10px');
    lyricDiv.style('margin', 'auto');
  
    audioEl.play();
    setInterval(updateLyrics, 100); 
  }
  
function updateLyrics() {
    let currentTime = audioEl.time();
    let totalBeats = Math.floor(currentTime / beatDuration);

let accumulatedBeats = 0;
    for (let i = 0; i < lyrics.length; i++) {
        accumulatedBeats += lyrics[i].beats;
        if (totalBeats < accumulatedBeats) {
        showLyric(lyrics[i].text);
        break;
        }
    }
}

function showLyric(lyric) {
if (lyric !== currentLyric) {
    currentLyric = lyric;
    lyricDiv.html(currentLyric);
}
}