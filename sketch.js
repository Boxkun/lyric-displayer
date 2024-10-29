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
    "text": "黒塗り世界宛て書簡",
    "beats": 32
  },
  {
    "text": "■■■■■■も言えないこんな世の中じゃ",
    "beats": 16
  },
  {
    "text": "■の盃を呷ったほうがマシだね",
    "beats": 16
  },
  {
    "text": "そしてクオリアを持った■■■として蘇り",
    "beats": 16
  },
  {
    "text": "■■ぎれなかった夜をくべる", //怎么词不一样
    "beats": 8
  },
  {
    "text": " ",
    "beats": 8
  },
  {
    "text": "451度じゃ燃やし尽くせない輝きを見たくて",
    "beats": 16
  },
  {
    "text": "アルファベットな僕ら綴るのさ言葉取り戻すため",
    "beats": 16
  },
  {
    "text": "星空の見えない地球発4時のニュース",
    "beats": 16
  },
  {
    "text": "ピークレベルを超えた脳の寄生を今祓う",
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
    "text": "■後2週間■■■かけた身体が目を覚まし",
    "beats": 12
  },
  {
    "text": "液化したピアノと夜を明かす",
    "beats": 8
  },
  {
    "text": " ",
    "beats": 4
  },
  {
    "text": "黄泉に行ってなお生まれ変わり続ける言の霊に託して",
    "beats": 16
  },
  {
    "text": "僕は叫ぶのさこの黒塗りの世界の裏各地へ",
    "beats": 16
  },
  {
    "text": "■ぬも■むも■■いも■くも愛す",
    "beats": 8
  },
  {
    "text": "■かれた■違いの■■の詩",
    "beats": 8
  },
  {
    "text": "■■に■き■■され■った言葉を",
    "beats": 8
  },
  {
    "text": "■■った■れ者が■■してく",
    "beats": 8
  },
  {
    "text": "■■以外■んで■■った■■溜めで",
    "beats": 8
  },
  {
    "text": "■■も■■も■■も伝えられなきゃ",
    "beats": 8
  },
  {
    "text": "■んでも■んでも■■切れないから",
    "beats": 8
  },
  {
    "text": "世界に送る黒塗りのラブレター",
    "beats": 8
  },
  {
    "text": "■■■■■■■■■■■■■■■",
    "beats": 32
  },
  {
    "text": "■■■■■■■■■■■■■■■歌 重音テト",
    "beats": 32
  }
]

let bpm = 185;
let beatDuration = 60 / bpm;
let totalBeatsElapsed = 0;

function setup() {
    noCanvas();
    audioEl = createAudio('https://raw.githubusercontent.com/n3xta/image-hosting/main/audio/letter_to_the_black_world.mp3');
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