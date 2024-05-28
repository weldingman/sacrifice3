//sacrifice

let pos;
let img;
let x = 20;
let y = 200;
let w = 400;
let h = 400;
let img2;
let cherry = true;
let init = false;
let canvasSize;
let rectSize;

function setup() {
  canvasSize = {w:800, h:800};
  rectSize = {w:200, h:200};
  createCanvas(canvasSize.w, canvasSize.h);
  img2 = loadImage('lips2.jpg');
  img = loadImage('cherry.png');
  beat = createAudio('RS.wav');
}

function mousePressed() {
  userStartAudio();
  beat.play();
  init = true;
}

function main(){
  fill(0, 0, 0);
  rect(200, 100,100,100);
  
  noFill();
  if(cherry){
    image(img, x, y, w, h);
  }
  else{
    image(img2, x, y, w, h);
    w += 10;
    h += 10;
  }
  
  
  
  
  if(x <= 200){
    x +=0.4;
  }
  else if(w > 0.3){
    if(y >= 130){
      y -= 0.4;
    }
    
    w -= 0.2;
    h -= 0.2;
  }
  else{
    cherry = false;
    
  }
}

function draw() {
  background(255);
  if(init){
    main();
  }
}
