let body = document.querySelector('body')

function hideMain() {
  let hideMain = document.querySelector('#intro')
  hideMain.style.display = 'none'
}

function showGame() {
  let canvas = document.querySelector('#myCanvas')
  canvas.style.display = 'block'
  gameoverAudio = new Audio('sounds/gameover.mp3')
  gameoverAudio.play()
  gameoverAudio.volume = 0.1
}

let restartbtn = document.querySelector('.restartbtn')
  restartbtn.addEventListener('click', function(){
  canvas.style.display = 'block'
  resetGame()
  initial()
  })

function showGameover() {
  let gameOver = document.querySelector('.gameover')
  canvas.style.display = 'none'
  gameOver.style.display = 'block'
  hideMain()
  let finalScore = document.querySelector('#score')
  finalScore.innerHTML = `SCORE: ${score}`
  gameoverAudio = new Audio('sounds/gameover.mp3')
  gameoverAudio.play()
  gameoverAudio.volume = 0.1
  
}

function startGame() {
  let startbtn = document.querySelector('button')
  startbtn.addEventListener('click',function(){
    hideMain()
    initial()
    canvas.style.display = 'block'
  })
}

function restartGame() {
  let restartbtn = document.querySelector('.restartbtn')
  restartbtn.addEventListener('click', function(){
  canvas.style.display = 'block'
  resetGame()
  initial()
  })
}

window.addEventListener('load', () => {
  startGame()
})

