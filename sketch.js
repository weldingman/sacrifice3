let pos;
let img;
let x = 20;
let y = 200;
let w = 200;
let h = 200;
let img2;
let cherry = true;


function setup() {
  createCanvas(400, 400);
  img2 = loadImage('lips2.jpg');
  img = loadImage('cherry.png');
  beat = createAudio('RS.wav');
  
  // console.log(img);
  beat.play();
}

function draw() {
  background(255);
  
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