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

let cloudLeftImg = document.createElement('img')
cloudLeftImg.src = 'images/cloud.png'

let cloudMiddleImg = document.createElement('img')
cloudMiddleImg.src = 'images/cloud.png'

let cloudRightImg = document.createElement('img')
cloudRightImg.src = 'images/cloud.png'

let rockImg = document.createElement('img')
rockImg.src = 'images/rock.png'

let coinImg = document.createElement('img')
coinImg.src = 'images/coin.png'

let rocks = [{x:canvas.width - 100, y:canvas.height - 168 }]

let playerX =  0 //200
let playerY = 300  //canvas.height - 165
let vplayerY = 0  //speed
let isJump = false  // jump or not jump


// --------Player----------
let input_key_buffer = new Array();

window.addEventListener("keydown", handlekeydown)
function handlekeydown(e) {
  e.preventDefault(); //
  input_key_buffer[e.keyCode] = true;
}

window.addEventListener("keyup", handlekeyup)
function handlekeyup(e) {
  e.preventDefault()
  input_key_buffer[e.keyCode] = false
}

window.addEventListener("load", update);
function update() {
  ctx.drawImage(playerImg, playerX, playerY)
  ctx.clearRect(0, 0, 9999, 9999)
  if (input_key_buffer[37]) {    //left
    playerX = playerX - 10
  }
  if (input_key_buffer[39]) {    //right
    playerX = playerX + 10
  }
  if (input_key_buffer[38]) {    //right
    vplayerY = -1;
    isJump = true;
  }
  if (isJump) {
    playerY = playerY + vplayerY
    vplayerY = vplayerY + 0.5
  }  
}

// function keydown(event) {
//   let movement = event.keyCode
//   switch (movement) {
//     case 37: playerX -= 10; //left
//       break;
//     case 39: playerX += 10; //right
//       break;
//     case 38: jumping = setInterval(Jump, 100)
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
  // ctx.drawImage(cloudLeftImg, 70, 140 )
  // ctx.drawImage(cloudMiddleImg, 180, 330 )
  // ctx.drawImage(cloudRightImg, canvas.width - 160, 180 )
  

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

  // window.requestAnimationFrame(update)
  
}



intervalID = setInterval( () => {
  requestAnimationFrame(draw)
}, 10)

window.requestAnimationFrame(update)





