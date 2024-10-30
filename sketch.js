let audioEl;
let lyricDiv;
let currentLyric = '';
let lyrics = 
[
  {
    "text": " ",
    "beats": 24
  },
  {
    "text": "黒塗り<br>世界宛て<br>書簡",
    "beats": 32
  },
  {
    "text": "■■■■■■",
    "beats": 3
  },
  {
    "text": "■■■■■■も<br>言えないこんな<br>世の中じゃ",
    "beats": 13
  },
  {
    "text": "■の盃を<br>呷ったほうが<br>マシだね",
    "beats": 16
  },
  {
    "text": "そしてクオリアを<br>持った■■■<br>として蘇り",
    "beats": 16
  },
  {
    "text": "■■ぎれなかった<br>夜を<br>くべる",
    "beats": 8
  },
  {
    "text": " ",
    "beats": 8
  },
  {
    "text": "451度じゃ<br>燃やし尽くせない<br>輝きを見たくて",
    "beats": 16
  },
  {
    "text": "アルファベットな<br>僕ら綴るのさ<br>言葉取り戻すため",
    "beats": 16
  },
  {
    "text": "星空の見えない<br>地球発4時の<br>ニュース",
    "beats": 16
  },
  {
    "text": "ピークレベルを<br>超えた脳の<br>寄生を今祓う",
    "beats": 14
  },
  {
    "text": "刹那",
    "beats": 2
  },
  {
    "text": "■後2週間",
    "beats": 4
  },
  {
    "text": "■後2週間<br>■■■かけた<br>身体が目を覚まし",
    "beats": 12
  },
  {
    "text": "液化したピアノと<br>夜を<br>明かす",
    "beats": 8
  },
  {
    "text": " ",
    "beats": 4
  },
  {
    "text": "黄泉に行ってなお<br>生まれ変わり続ける<br>言の霊に託して",
    "beats": 16
  },
  {
    "text": "僕は叫ぶのさ<br>この黒塗りの<br>世界の裏各地へ",
    "beats": 16
  },
  {
    "text": "■ぬも■むも<br>■■いも<br>■くも愛す",
    "beats": 8
  },
  {
    "text": "■かれた<br>■違いの<br>■■の詩",
    "beats": 8
  },
  {
    "text": "■■に<br>■き■■され<br>■った言葉を",
    "beats": 8
  },
  {
    "text": "■■った<br>■れ者が<br>■■してく",
    "beats": 8
  },
  {
    "text": "■■以外<br>■んで■■った<br>■■溜めで",
    "beats": 8
  },
  {
    "text": "■■も■■も<br>■■も<br>伝えられなきゃ",
    "beats": 8
  },
  {
    "text": "■んでも<br>■んでも<br>■■きれないから",
    "beats": 8
  },
  {
    "text": "世界に送る<br>黒塗りの<br>ラブレター",
    "beats": 4
  },
  {
    "text": "■■■■■<br>■■■■<br>■■■■■■",
    "beats": 4
  },
  {
    "text": "■■■<br>■■■■<br>■■",
    "beats": 32
  },
  {
    "text": "■■■<br>■■■■<br>■■歌 重音テト",
    "beats": 32
  }
]

let bpm = 185;
let beatDuration = 60 / bpm;
let totalBeatsElapsed = 0;

function setup() {
    audioEl = createAudio('https://raw.githubusercontent.com/n3xta/image-hosting/main/audio/letter_to_the_black_world.mp3');
    audioEl.showControls();
  
    lyricDiv = createDiv('');
    lyricDiv.addClass('lyric-text');
    //lyricDiv.style('font-size', '48px');
    //lyricDiv.style('padding', '10px');
    //lyricDiv.style('margin', 'auto');
  
    audioEl.play();
    setInterval(updateLyrics, 100); 

    createCanvas(windowWidth, windowHeight);
    background(223,223,223,255);
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

// function showLyric(lyric) {
//   if (lyric !== currentLyric) {
//     currentLyric = lyric;
//     lyricDiv.html('');
//   }
// }

function showLyric(lyric) {
  if (lyric !== currentLyric) {
      currentLyric = lyric;

      lyricDiv.html('');

      // keep <br> 
      let chars = lyric.split(/(<br>)/).map(part => {
          if (part === '<br>') {
              return part; 
          }
          // Wrap other characters in <span> for animation
          return part.split('').map(char => `<span>${char}</span>`).join('');
      }).join('');

      lyricDiv.html(chars);

      // magic
      anime({
          targets: 'span',
          opacity: [0, 1],
          duration: 1,
          delay: anime.stagger(35),
      });

      anime({
          targets: 'span',
          translateX: [50, 0],
          delay: anime.stagger(35),
          duration: 500,
          easing: 'easeOutExpo'
      });
  }
}
