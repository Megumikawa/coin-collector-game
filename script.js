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

let cloudImg1 = document.createElement('img')
cloudImg1.src = 'images/cloud.png'

let cloudImg2 = document.createElement('img')
cloudImg2.src = 'images/cloud.png'

let cloudImg3 = document.createElement('img')
cloudImg3.src = 'images/cloud.png'

function draw() {
  ctx.drawImage(backImg, 0, 0)
  ctx.drawImage(cloudImg1, 70, 140 )
  ctx.drawImage(cloudImg2, 180, 330 )
  ctx.drawImage(cloudImg3, canvas.width - 160, 180 )
  ctx.drawImage(playerImg, 0, canvas.height - 165 )
  ctx.drawImage(fieldImg, 0, canvas.height - fieldImg.height)
  
  ctx.font = '20px verdana'
  ctx.fillText('score:' + score, canvas.width - 100, 50)

  


}



intervalID = setInterval( () => {
  requestAnimationFrame(draw)
}, 100)



