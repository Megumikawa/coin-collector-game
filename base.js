let body = document.querySelector('body')

function hideMain() {
  let hideMain = document.querySelector('#intro')
  body.removeChild(hideMain)
}

function showGame() {
  let canvas = document.querySelector('#myCamvas')
  canvas.style.display = 'block'
  initial()
}

function showGameover() {
  let gameOver = documetn.querySelector('#gameOver')
  gameOver.style.display = 'block'
}

function startGame() {
  let startBtn = document.querySelector('button')
  startBtn.addEventListener('click',function(){
    hideMain()
    showGame()
  })
}

window.addEventListener('load', () => {
  startGame()
})
