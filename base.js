let body = document.querySelector('body')

function hideMain() {
  let hideMain = document.querySelector('#intro')
  body.removeChild(hideMain)
}

function showGame() {
  let canvas = document.querySelector('#myCanvas')
  canvas.style.display = 'block'
  restartGame()
}

function showGameover() {
  let gameOver = document.querySelector('.gameover')
  canvas.style.display = 'none'
  gameOver.style.display = 'block'
  let restartbtn = document.querySelector('.restartbtn')
  restartbtn.addEventListener('click', function(){
  gameOver.style.display = 'none'
  showGame()
  })
}

function startGame() {
  let startbtn = document.querySelector('button')
  startbtn.addEventListener('click',function(){
    hideMain()
    startGame()
  })
}

// function updateGame() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)

// }

window.addEventListener('load', () => {
  startGame()
  showGame()
})
