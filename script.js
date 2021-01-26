let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'
// let currentTime = 0
let intervalId = 0
let score = 0
let rocks = [{x:canvas.width - 100, y:canvas.height - 168 }]
let coins = [{x: 140, y: 0}]
let playerX = 200  //start position
let playerY = canvas.height - 165  //start position
let vplayerY = 0  //speed
let isJump = false  // jump or not jump


let backImg = document.createElement('img')
backImg.src = 'images/bg.png'

let fieldImg = document.createElement('img')
fieldImg.src = 'images/bg-field.jpg'

let playerImg = document.createElement('img')
playerImg.src = 'images/player-right.png'

let rockImg = document.createElement('img')
rockImg.src = 'images/rock.png'

let coinImg = document.createElement('img')
coinImg.src = 'images/coin.png'


// --------------------------------------
function draw() {
  ctx.drawImage(backImg, 0, 0)
  
  for (let i = 0; i < rocks.length; i++) {
    ctx.drawImage(rockImg, rocks[i].x, rocks[i].y)
    rocks[i].x--
    if(rocks[i].x == 0) {
      rocks.push({
        x: canvas.width - 100,
        y: canvas.height - 168
      })
    }
  }

  document.querySelector("setImages")
  ctx.drawImage(playerImg, playerX, playerY)
  
// -----------coin------------
  for (let i = 0; i < coins.length; i++) {
    ctx.drawImage(coinImg, coins[i].x, coins[i].y)
    coins[i].y++
    if(coins[i].y == 100) {
      coins.push({
        x: Math.floor(Math.random()* canvas.width),
        y: 0
      })
    }
  }

//--------player------
// if(playerX+playerImg.width >= rocks[i].x && playerX <=rocks[i){
//   clearInterval(intervalId)
//   alert('GAME OVER')
//   location.reload()
// }

  ctx.drawImage(fieldImg, 0, canvas.height - fieldImg.height)
  ctx.font = '20px verdana'
  // ctx.fillText('SCORE:' + score, canvas.width - 140, 50)
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
  
  if (input_key_buffer[37]) {    //left
    playerX = playerX - 10
  } 
  if (input_key_buffer[39]) {    //right
    playerX = playerX + 10
  } 
  if (input_key_buffer[38]) {    //jump
    vplayerY = -8;
    isJump = true;
  }
  if (isJump) {
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

//----------------------------------
// let i = 0
//   let intervalIdEnd = setInterval(function(){
//   i++

//   if(i > 0) {
//     console.log(hello)
//     clearInterval(intervalIdEnd)
//   }
// }, 1000)

// let gameoverButton = document.querySelector('#start')
// function countdown() {
//   // let count = document.querySelector('.button-area span')
  
//   gameoverButton.addEventListener('click', function(){
//     let intervalIdEnd = setInterval(function(){
//       i--
//       if(i < -1 ) {
//       console.log()
//       clearInterval(intervalIdEnd)
//     }
//   }, 1000)
//   window.requestAnimationFrame(countdown)
// })

// }



//--------timer--------
let startBtn = document.querySelector('#start')
let currentTime = document.querySelector('#timer')

let clock = new Timer ()

function updateTime() {
  currentTime.innerHTML = clock.time
}

startBtn.addEventListener('click', () => {
  clock.start(updateTime)
})

// intervalId = setInterval( () => {
//   requestAnimationFrame(draw)
// }, 10)



window.addEventListener('load', () => {
  intervalId = setInterval( () => {
    requestAnimationFrame(draw)
  }, 10)
})
