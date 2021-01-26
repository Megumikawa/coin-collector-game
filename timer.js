class Timer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(start) {
    this.intervalId = setIntervalId(() =>{
      this.currentTime +=1
      start()
    },1000)
  }

  restartClick(restart){ 
    
  }
}





// class Timer {
//   constructor() {
//     this.time = 5
//     this.intervalId = 0
//   }

//   start(startGame) {
//     this.intervalId = setInterval(() => {
//       this.time -= 1
//       startGame()
//   if(this.time < 0){
//     clearInterval(this.intervalId);
//   }
//     }, 1000)
//   }
// }



// let count = 0
// let countup = function(){
//   console.log(count++)
// }
// let id = setInterval(function(){
//   countup()
//   if( count > 5) {
//     clearInterval(id)
//   }
// },1000)