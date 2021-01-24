let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'
let intervalID = 0
let score = 0

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

let rocks = [{x:canvas.width - 100, y:canvas.height - 168 }]

let playerX = 200  //start position
let playerY = canvas.height - 165  //start position
let vplayerY = 0  //speed
let isJump = false  // jump or not jump


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
  if (input_key_buffer[37]) {    //left
    playerX = playerX - 10
  }
  if (input_key_buffer[39]) {    //right
    playerX = playerX + 10
  }
  if (input_key_buffer[38]) {    //right
    vplayerY = -8;
    isJump = true;
  }
  if (isJump) {
    playerY = playerY + vplayerY
    vplayerY = vplayerY + 0.5
  }
  
  window.requestAnimationFrame(update)
}

// function keydown(event) {
//   let movement = event.keyCode
//   switch (movement) {
//     case 37: playerX -= 10; //left
//       break;
//     case 39: playerX += 10; //right
//       break;
//     case 38: playerY -= 10;  //up
//       break;
//   }
// ↑↑ can't jump
// }
// --------------------------

// document.addEventListener('keydown', () => {
//   playerIncrement = -5
// })

// document.addEventListener('keyup', () => {
//   playerIncrement = 2
// })

//----------coin-----------



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
// GAME OVER condition
    // if() {
    //   clearInterval()
    //   alert('game over')
    // }

  }

  ctx.drawImage(playerImg, playerX, playerY)
  ctx.drawImage(coinImg, 20, 0)
  ctx.drawImage(fieldImg, 0, canvas.height - fieldImg.height)

  ctx.font = '20px verdana'
  ctx.fillText('score:' + score, canvas.width - 100, 50)

}

let i = 0
let intervalId = setInterval(function(){
  i++
  console.log('hello')
  if(i > 30){
    clearTimeout(intervalId)
  }
},1000)

intervalID = setInterval( () => {
  requestAnimationFrame(draw)
}, 10)







