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

function draw() {
  ctx.drawImage(backImg, 0, 0)
  ctx.drawImage(cloudLeftImg, 70, 140 )
  ctx.drawImage(cloudMiddleImg, 180, 330 )
  ctx.drawImage(cloudRightImg, canvas.width - 160, 180 )
  ctx.drawImage(playerImg, 0, canvas.height - 165 )
  ctx.drawImage(fieldImg, 0, canvas.height - fieldImg.height)
  
  ctx.font = '20px verdana'
  ctx.fillText('score:' + score, canvas.width - 100, 50)


}



intervalID = setInterval( () => {
  requestAnimationFrame(draw)
}, 100)



