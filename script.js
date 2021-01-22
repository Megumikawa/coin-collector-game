let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'
let intervalID = 0

let backImg = document.createElement('img')
backImg.src = 'images/bg.png'

let fieldImg = document.createElement('img')
fieldImg.src = 'images/bg-field.jpg'

let playerImg = document.createElement('img')
playerImg.src = 'images/player-right.png'

function draw() {
  ctx.drawImage(backImg, 0, 0)
  ctx.drawImage(fieldImg, 0, canvas.height - fieldImg.height)
  ctx.drawImage(playerImg, 0, 0)



}
// this is not working



intervalID = setInterval( () => {
  requestAnimationFrame(draw)
}, 100)