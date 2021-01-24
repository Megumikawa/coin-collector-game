const coinImg = new Image();
coinImage.src = 'images/coin.png';
class coin {
  constructor(x, y, width, height, index) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.index = index;
    this.image = coinImg
  }
}



const coinImage = new Image();
coinImage.src = './images/Gold/Gold_1.png';
class Coin {
    constructor(x, y, width, height, index) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.index = index;
        this.currentFrame = 1;
        this.image = coinImage;
    }