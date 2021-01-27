let body = document.querySelector('body')

function hideMain() {
  let hideMain = document.querySelector('#intro')
  hideMain.style.display = 'none'
}

function showGame() {
  let canvas = document.querySelector('#myCanvas')
  canvas.style.display = 'block'
  // restartGame()
}

function showGameover() {
  let gameOver = document.querySelector('.gameover')
  canvas.style.display = 'none'
  gameOver.style.display = 'block'
  hideMain()
  let restartbtn = document.querySelector('.restartbtn')
  restartbtn.addEventListener('click', function(){
  // gameOver.style.display = 'none'
  // showGame()
  canvas.style.display = 'block'
  resetGame()
  initial()
  })
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
  // rocks = [{x:canvas.width + 30, y:canvas.height - 150 }]
  // coins = [{x: 140, y: 0}]
  // playerX = 200  //start position
  // playerY = canvas.height - 165  //start position
  initial()
  })
}




window.addEventListener('load', () => {
  startGame()
})

