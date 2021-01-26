// let imgCnt = 5  //number of img on screen
// let aryImg = []
// let canvasWidth = 500
// let canvasHeight = 700
// let imgBaseSizeX = 40
// let imgBaseSizeY = 40

// let img = new Image()
// img.src = "images/coin.png"
// img.onload = flow_start


// function setImages() {
//   for(let i = 0; i < imgCnt; i++) {
//     aryImg.push({
//       "posx": Math.random()*canvasWidth, //initial position
//       "posy": Math.random()*canvasHeight,
//       "sizew": imgBaseSizeX,  //image width
//       "sizew": imgBaseSizeY,  //image height
//     })
//   }
// }

// // image parameter upload
// let idx = 0
// function flow() {
//   ctx.clearRect(0, 0, canvasWidth, canvasHeight)
//   for(idx = 0; idx < imgCnt; idx++) {
//     aryImg[idx].posy += 1
//     ctx.drawImage(img,aryImg[idx].posx, aryImg[idx].posy, aryImg[idx].sizew, aryImg[idx].sizeh)
//     if(aryIMg[idx].posy >= cvsh){
//       aryImg[idx].posy = -aryImg[idx].sizeh
//     }
//   }
// }

// function flow_start() {
//   setImages();
//   setInterval(flow, 10)
// }

