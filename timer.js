class Timer {
  constructor() {
    this.time = 0
    this.intervalId = 0
  }

  start(startGame) {
    this.intervalId = setInterval(() => {
      this.time += 1
      startGame()
    }, 1000)
  }
}