let audioEl;
let lyricDiv;
let currentLyric = '';
let lyrics = [];

let bpm = 185;
let beatDuration = 60 / bpm;
let totalBeatsElapsed = 0;

let overlayRemoved = false;

function setup() {

    fetch('lib/processed_lyrics.json')
    .then(response => response.json())
    .then(data => {
        lyrics = data;
        console.log("Lyrics loaded:", lyrics);
    })
    .catch(error => console.error("Error loading lyrics:", error));

    audioEl = createAudio('https://raw.githubusercontent.com/n3xta/image-hosting/main/audio/letter_to_the_black_world.mp3');
    audioEl.showControls();
  
    lyricDiv = createDiv('');
    lyricDiv.addClass('lyric-text');
  
    audioEl.play();
    setInterval(updateLyrics, 100); 

    createCanvas(windowWidth, windowHeight);
    background(223,223,223,255);

}
  
function updateLyrics() {
    let currentTime = audioEl.time() + 0.1;
    let totalBeats = Math.floor(currentTime / beatDuration);

    if (totalBeats >= 24 && !overlayRemoved) {
      const overlay = document.getElementById('black-overlay');
      overlay.remove();
      overlayRemoved = true;
    }

    let accumulatedBeats = 0;
        for (let i = 0; i < lyrics.length; i++) {
            accumulatedBeats += lyrics[i].beats;
            if (totalBeats < accumulatedBeats) {
            let lyricObj = lyrics[i];
            let isNew = lyricObj.isNew;
            showLyric(lyricObj.text, isNew); // 为了把isNew传入，把原本的直接调用lyrics[i]变成了lyricsObj
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

function showLyric(lyric, isNew) {
    console.log('showLyric called with:', { lyric, isNew });
    if (lyric !== currentLyric) {
        currentLyric = lyric;
        if (!isNew) {
            console.log('Clearing lyricDiv because isNew is false');
            lyricDiv.html(''); 
        }

        // 统一使用 'animate-me' 类，无论 isNew 的值
        let spanClass = 'animate-me';

        let chars = lyric.split(/(<br>|<span[^>]*>.*?<\/span>)/).map(part => {
            if (part === '<br>') {
                return part;
            } else if (part.match(/<span[^>]*>.*?<\/span>/)) {
                return part;
            } else {
                return part.split('').map(char => {
                    return `<span class="${spanClass}">${char}</span>`;
                }).join('');
            }
        }).join('');

        if (isNew) {
            lyricDiv.html(lyricDiv.html() + chars);
        } else {
            lyricDiv.html(chars);
        }

        console.log(lyricDiv.html());

        anime({
            targets: 'span.animate-me',
            opacity: [0, 1],
            duration: 1,
            delay: anime.stagger(35),
        });

        anime({
            begin: function() {
                document.querySelectorAll('span.animate-me').forEach(function(el) {
                    el.classList.remove('animate-me');
                });
            },
            targets: 'span.animate-me',
            translateX: [50, 0],
            delay: anime.stagger(35),
            duration: 500,
            easing: 'easeOutExpo',
        });

        //■■■■■■も言えないこんな世の中じゃ
        anime({
        targets: '.block-50a',
        opacity: 1,
        width: '50vw',
        easing: 'easeOutExpo',
        duration: 800,
        });

        //■の盃を呷ったほうがマシだね
        anime({
            targets: '.block-15a',
            opacity: 1,
            width: '15vw',
            easing: 'easeOutExpo',
            duration: 500,
            });
        
        //そしてクオリアを持った■■■として蘇り
        anime({
            targets: '.block-27a',
            opacity: 1,
            width: '27vw',
            easing: 'easeOutExpo',
            duration: 500,
            });

        //■■切れなかった夜をくべる
        anime({
            targets: '.block-18a',
            opacity: 1,
            width: '18vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        //刹那■後
        //2週間■■■かけた身体が目を覚まし
        anime({
            targets: '.block-9a',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        anime({
            targets: '.block-23a',
            opacity: 1,
            width: '23vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  
        
        //█ぬも█むも
        //██いも
        //█くも愛す

        anime({
            targets: '.block-9b',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  
        
        anime({
            targets: '.block-9c',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  
        
        anime({
            targets: '.block-17a',
            opacity: 1,
            width: '17vw',
            easing: 'easeOutExpo',
            duration: 700,
            });  

        anime({
            targets: '.block-9d',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            }); 
        
        //█かれた
        //█違い
        //██の詩
        anime({
            targets: '.block-8a',
            opacity: 1,
            width: '8vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  
        
        anime({
            targets: '.block-9e',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            }); 

        anime({
            targets: '.block-18b',
            opacity: 1,
            width: '18vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        //■■に
        //■き■■され
        //■った言葉を
        anime({
            targets: '.block-18c',
            opacity: 1,
            width: '18vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        anime({
            targets: '.block-9f',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        anime({
            targets: '.block-17b',
            opacity: 1,
            width: '17vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  
        
        anime({
            targets: '.block-9g',
            opacity: 1,
            width: '18vw',
            easing: 'easeOutExpo',
            duration: 500,
            }); 

        //■■った
        //■れ者が
        //■■してく
        anime({
            targets: '.block-15b',
            opacity: 1,
            width: '15vw',
            easing: 'easeOutExpo',
            duration: 500,
            }); 

        anime({
            targets: '.block-9h',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            }); 
            
        anime({
            targets: '.block-18d',
            opacity: 1,
            width: '18vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        //■■以外
        //■んで■■った
        //■■溜めで
        
        anime({
            targets: '.block-16a',
            opacity: 1,
            width: '16vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  
        
        anime({
            targets: '.block-9i',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        anime({
            targets: '.block-16b',
            opacity: 1,
            width: '16vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        anime({
            targets: '.block-16c',
            opacity: 1,
            width: '16vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        //■■も■■も
        //■■も
        //伝えられなきゃ

        anime({
            targets: '.block-17c',
            opacity: 1,
            width: '17vw',
            easing: 'easeOutExpo',
            duration: 500,
            // delay: 0,
            });  


        anime({
            targets: '.block-17d',
            opacity: 1,
            width: '17vw',
            easing: 'easeOutExpo',
            duration: 500,
            // delay: 500,
            });

        anime({
            targets: '.block-17e',
            opacity: 1,
            width: '17vw',
            easing: 'easeOutExpo',
            duration: 500,
            // delay: 1000,
            });

        //■んでも
        //■んでも
        //■■切れないから

        anime({
            targets: '.block-9j',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        anime({
            targets: '.block-9k',
            opacity: 1,
            width: '9vw',
            easing: 'easeOutExpo',
            duration: 500,
            }); 

        anime({
            targets: '.block-17f',
            opacity: 1,
            width: '17vw',
            easing: 'easeOutExpo',
            duration: 500,
            }); 
    
        //世界に送る
        //黒塗りの
        //ラブレター
        anime({
            targets: '.block-45a',
            opacity: 1,
            width: '45vw',
            easing: 'easeOutExpo',
            duration: 500,
            }); 

        anime({
            targets: '.block-35a',
            opacity: 1,
            width: '35vw',
            easing: 'easeOutExpo',
            duration: 500,
            });  

        anime({
            targets: '.block-45b',
            opacity: 1,
            width: '45vw',
            easing: 'easeOutExpo',
            duration: 500,
            }); 

        //ending

        anime({
            targets: '.block-25a',
            opacity: 1,
            width: '25vw',
            easing: 'easeOutExpo',
            duration: 4000,
            }); 

        anime({
            targets: '.block-35b',
            opacity: 1,
            width: '35vw',
            easing: 'easeOutExpo',
            duration: 4000,
            });  

        anime({
            targets: '.block-18e',
            opacity: 1,
            width: '18vw',
            easing: 'easeOutExpo',
            duration: 4000,
            });  
}
}
