let canvas = document.querySelector('#myCanvas')
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'
let currentTime = 0
let intervalId = 0
let score = 0
let rocks = [{x:canvas.width + 10, y:canvas.height - 150 }]
let devils = [{x:canvas.width +150, y:canvas.height - 400 }]
let coins = [{x: 140, y: 0}]
let coins2 = [{x: 30, y: 0}]
let playerX = 200  //start position
let playerY = canvas.height - 165  //start position
let vplayerY = 1  //speed
let isJump = false  // jump or not jump
let isGameOver = false


let backImg = document.createElement('img')
backImg.src = 'images/bg.png'

let fieldImg = document.createElement('img')
fieldImg.src = 'images/bg-field.jpg'

let playerImg = document.createElement('img')
playerImg.src = 'images/player-right.png'

let cloudLeftImg = document.createElement('img')
cloudLeftImg.src = 'images/cloud.png'

let cloudRightImg = document.createElement('img')
cloudRightImg.src = 'images/cloud.png'

let rockImg = document.createElement('img')
rockImg.src = 'images/rock.png'

let devilImg = document.createElement('img')
devilImg.src = 'images/devil.png'

let coinImg = document.createElement('img')
coinImg.src = 'images/coin.png'

let coinImg2 = document.createElement('img')
coinImg2.src = 'images/coin2.png'

// --------------------------------------
function draw() {
  ctx.drawImage(backImg, 0, 0)
  ctx.drawImage(cloudLeftImg, 70, 300)
  ctx.drawImage(cloudRightImg, canvas.width - 160, 80)

  //--------enemy1(rock)---------//
  for (let i = 0; i < rocks.length; i++) {
    ctx.drawImage(rockImg, rocks[i].x, rocks[i].y)
    rocks[i].x--
    if(rocks[i].x == -20) {
      rocks.push({
        x: canvas.width - 10,
        y: canvas.height - 150
      })
    }
    if(playerX < rocks[i].x + rockImg.width &&
      playerX + rockImg.width > rocks[i].x &&
      playerY < rocks[i].y + rockImg.height&&
      playerY + rockImg.height > rocks[i].y) {
      clearInterval(intervalId)
      isGame = true
      showGameover()
      let bgmAudio = new Audio('sounds/bgbgm.mp3')
      bgmAudio.pause()
      bgmAudio.currentTime = 0
    }
  }
  //----------enemy2(devil)----------//
  for (let i = 0; i < devils.length; i++) {
    ctx.drawImage(devilImg, devils[i].x, devils[i].y)
    devils[i].x--
    if(devils[i].x == -40) {
      devils.push({
        x: canvas.width +150 ,
        y: Math.floor(Math.random()* (canvas.height - devilImg.width))
      })
    }
    if(playerX < devils[i].x + devilImg.width &&
      playerX + devilImg.width > devils[i].x &&
      playerY < devils[i].y + rockImg.height&&
      playerY + devilImg.height > devils[i].y) {
      score -= 5
      let devilAudio = new Audio('sounds/ng.wav')
      devilAudio.play()
      devilAudio.volume = 0.1
    }
  }

  document.querySelector("setImages")
  ctx.drawImage(playerImg, playerX, playerY)

// -----------coin------------
  for (let i = 0; i < coins.length; i++) {
    ctx.drawImage(coinImg, coins[i].x, coins[i].y)
    coins[i].y++
    if(coins[i].y + coinImg.height > playerY &&
      coins[i].x < playerX + playerImg.width &&
      coins[i].x + coinImg.width > playerX) {
        console.log("score")
        score += 50
        coins.splice(i, 1)
        let coinAudio = new Audio('sounds/coin.wav')
        coinAudio.play()
    }
    if(coins[i].y == 100) {
      coins.push({
        x: Math.floor(Math.random()* (canvas.width - coinImg.width)),
        y: 0
      })
    }
  }

  for (let i = 0; i < coins2.length; i++) {
    ctx.drawImage(coinImg2, coins2[i].x, coins2[i].y)
    coins2[i].y++
    if(coins2[i].y + coinImg2.height > playerY &&
      coins2[i].x < playerX + playerImg.width &&
      coins2[i].x + coinImg2.width > playerX) {
        score += 30
        coins2.splice(i, 1)
        let coinAudio = new Audio('sounds/coin.wav')
        coinAudio.play()
    }
    if(coins2[i].y == 100) {
      coins2.push({
        x: Math.floor(Math.random()* (canvas.width - coinImg2.width)),
        y: 0
      })
    }
  }

  //---------------------------------------
  ctx.drawImage(fieldImg, 0, canvas.height - fieldImg.height)
  ctx.font = '20px verdana'
  ctx.fillText('SCORE:' + score, canvas.width - 140, 50)
  // ctx.fillText((*), 250, 300)
  // ctx.fillText('TIME:' + currentTime, canvas.width - 140, 80)
}


// --------draw(END)------------------------------


// --------Player----------
let input_key_buffer = new Array();

window.addEventListener("keydown", handlekeydown)
function handlekeydown(event) {
  event.preventDefault(); //
  input_key_buffer[event.keyCode] = true;
}
window.addEventListener("keyup", handlekeyup)
function handlekeyup(event) {
  event.preventDefault()
  input_key_buffer[event.keyCode] = false
}
window.addEventListener("load", update);
function update() {
  ctx.drawImage(playerImg, playerX, playerY)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  let fieldY = canvas.height - fieldImg.height
  
  if (input_key_buffer[37] && playerX > 0) {    //left
    playerX = playerX - 10
  } 
  if (input_key_buffer[39] && playerX + playerImg.width < canvas.width) {    //right
    playerX = playerX + 10
  }
  if (input_key_buffer[38]) {    //jump
    vplayerY = -8;
    isJump = true;
  }
  if (isJump) { //stop on field
    if (playerY + playerImg.height > fieldY) {
      playerY = fieldY - playerImg.height
      isJump = false
    }
    else {
    playerY = playerY + vplayerY
    vplayerY = vplayerY + 0.5
    }
  }
  window.requestAnimationFrame(update)
}
// --------player(END)------------------


function initial(){
  intervalId = setInterval( () => {
    requestAnimationFrame(draw)
  }, 10)

}

function resetGame() {
  rocks = [{x:canvas.width + 30, y:canvas.height - 150 }]
  devils = [{x:canvas.width +150, y:canvas.height - 400 }]
  coins = [{x: 140, y: 0}]
  coins2 = [{x: 30, y: 0}]
  playerX = 200  //start position
  playerY = canvas.height - 165  //start position
}