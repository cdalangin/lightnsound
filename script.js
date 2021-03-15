// Global Constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables

// var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var pattern = []
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakes = 0

function newPattern() {
  
  for(let i=0;i<=4;i++){
    var randomButton = Math.floor(Math.random() * 5) + 1
    pattern.push(randomButton)
  }
  console.log(pattern)
}

function startGame() {
  // initialize game variables
  progress = 0;
  mistakes = 0;
  pattern = []
  
  newPattern()
  
  gamePlaying = true;
  
  document.getElementById("message").classList.add("hidden");
  document.getElementById("strikes").classList.remove("hidden");
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  document.getElementById("strikeCount").innerHTML = 0
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  
  document.getElementById("message").classList.remove("hidden");
  document.getElementById("strikes").classList.add("hidden");
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 200, // 261.6,
  2: 300, // 329.6,
  3: 400, // 392,
  4: 500, // 466.2
  5: 600
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // if guess is correct
  if(btn == pattern[guessCounter]) {
    // if turn over
    if(progress == guessCounter) {
      // if last turn  
      if(progress == pattern.length - 1) {
        winGame()
      }
      // if not last turn
      else {
        progress++
        playClueSequence()
      }
    }
    // after each guess
    else {
      guessCounter++
    }
  }
  // if guess is incorrect
  else {
    if(mistakes != 2){
      mistakes++
      document.getElementById("strikeCount").innerHTML = mistakes
    }
    else{
      loseGame()
    }
    
  }
}