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

let rocks = [{x:canvas.width - 100, y:canvas.height - 168 }]

let playerX = 200
let playerY = canvas.height - 165
let playerIncrement = 2
// playerY -= playerIncrement

// --------Player----------
window.addEventListener('keydown', keydown, true)

function keydown(event) {
  let movement = event.keyCode
  switch (movement) {
    case 37: playerX -= 10; //left
      break;
    case 39: playerX += 10; //right
      break;
    case 38: playerY -= 1 ; //up
      break;
    case 40: playerY += 10; //down
    break;
  }
}
// --------------------------

// document.addEventListener('keydown', () => {
//   playerIncrement = -5
// })

// document.addEventListener('keyup', () => {
//   playerIncrement = 2
// })



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
  ctx.drawImage(fieldImg, 0, canvas.height - fieldImg.height)
  

  ctx.font = '20px verdana'
  ctx.fillText('score:' + score, canvas.width - 100, 50)


  
}



intervalID = setInterval( () => {
  requestAnimationFrame(draw)
}, 10)



