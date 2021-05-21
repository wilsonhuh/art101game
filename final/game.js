'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin = [];
let fishb = [];
let fishc = [];
let shark = [];
let playerImg;
let coinImg;
let fishbImg;
let fishcImg;
let sharkImg;
let winImg;

function preload(){
	playerImg = loadImage('tiktaalik.png');
    coinImg = loadImage('fish1.png');
    fishbImg = loadImage('fish3.png');
    fishcImg = loadImage('fish2.png');
    sharkImg = loadImage('shark.png');
    winImg = loadImage('victory.png');
}	

function setup() {
 cnv = createCanvas(w, h);

imageMode(CENTER);
textFont('Helvetica');

player = new Player;

//coin [0] = new Coin();
coin.push(new Coin());
fishb.push(new Fishb());
fishc.push(new Fishc());
shark.push(new Shark());
}


function draw() {
  
  switch (state){
    case 'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
    break;
    case 'level 1':
   level1();
   cnv.mouseClicked(level1MouseClicked);
    break;
    case 'level 2':
    level2();
    cnv.mouseClicked(level2MouseClicked);  
    break;
    case 'level 3':
    level3();
    cnv.mouseClicked(level3MouseClicked);  
    break;
    case 'win':
    Win();
    cnv.mouseClicked(WinMouseClicked);
    break;
    case 'lose':
    Lose();
    cnv.mouseClicked(LoseMouseClicked);  
    default:
    break;
  }
  

}

function keyPressed(){
	if (keyCode == LEFT_ARROW){
		player.direction = 'left'
	} else if(keyCode == RIGHT_ARROW) {
	    player.direction = 'right'
	} else if(keyCode == UP_ARROW) {
	    player.direction = 'up'
	} else if(keyCode == DOWN_ARROW) {
	    player.direction = 'down'
	} else if (key = ' '){
	 player.direction = 'still';
}				
}	


function keyReleased(){
  let numberKeysPressed = 0;
  if (keyIsDown(LEFT_ARROW)){
    numberKeysPressed++;
  }
  if (keyIsDown(RIGHT_ARROW)){
    numberKeysPressed++;
  }
  if (keyIsDown(UP_ARROW)){
    numberKeysPressed++;
  }
  if (keyIsDown(DOWN_ARROW)){
    numberKeysPressed++;
  }
  if (numberKeysPressed == 0){
  player.direction = 'still';
  }
}  


//function mousePressed(){
//  state = 'level 1';
//}

function title(){
  background(150,150,250);
  textSize(100);
  fill(255);
  stroke(255);
  textAlign(CENTER);
  text('LIVE', w/2,h/5);
  textSize(30);
  text('Click to Start the Journey to Land', w/2, h*4/5);
  image(playerImg, 300, 300, 400, 400);
}

function titleMouseClicked(){
   console.log('canvas is clicked on title page');
   state = 'level 1'
 }

function level1(){
  background(50, 150, 200);

  if (random(1)<= 0.04){
	  coin.push(new Coin());
  }  
  
  if (random(1)<= 0.0008){
	  shark.push(new Shark());
  }  
  
  player.display();
  player.move();
  
  
  for (let i = 0; i < coin.length; i++){
	  coin[i].display();
      coin[i].move();  
  }
  
  for (let i = 0; i < shark.length; i++){
	  shark[i].display();
      shark[i].move();  
  }
  
  //check  for collision, if there is a collision increase points by 1 AND splice that coin out of array
  
  for (let i = coin.length - 1; i >= 0; i--) {
  if (dist(player.x, player.y, coin[i].x, coin[i].y) <= (player.r + coin[i].r) / 2){
	 points++;
	 console.log(points);
	 coin.splice(i,1);
    } else if (coin[i].y > h){
     coin.splice(i,1);
    }
  }  
  
  for (let i = shark.length - 1; i >= 0; i--) {
  if (dist(player.x, player.y, shark[i].x, shark[i].y) <= (player.r + shark[i].r) / 2){
	 points=-1;
	 console.log(points);
	 shark.splice(i,1);
	 } 
	 else if (shark[i].y > h){
	 shark.splice(i,1);
	 }
  }    

text('Level 1', w/2, h*1/8);  
text('Fish Eaten:' + points, w/2, h*9/10); 

 if (points >= 20){
   state = "level 2";
 }
  
 if (points <= -1){
   state = "lose";
 }  
  
}


function level2(){
  background(100, 160, 240);

  if (random(1)<= 0.02){
	  fishb.push(new Fishb());
  }  
  
  if (random(1)<= 0.005){
	  shark.push(new Shark());
  }  
  
 player.display();
 player.move();
  
  
  for (let i = 0; i < fishb.length; i++){
	  fishb[i].display();
      fishb[i].move();  
  }
  
  for (let i = 0; i < shark.length; i++){
	  shark[i].display();
      shark[i].move();  
  }
  
  //check  for collision, if there is a collision increase points by 1 AND splice that fish out of array
  
  for (let i = fishb.length - 1; i >= 0; i--) {
  if (dist(player.x, player.y, fishb[i].x, fishb[i].y) <= (player.r + fishb[i].r) / 2){
	 points++;
	 console.log(points);
	 fishb.splice(i,1);
    } else if (fishb[i].y > h){
     fishb.splice(i,1);
    }
  }  
  
  for (let i = shark.length - 1; i >= 0; i--) {
  if (dist(player.x, player.y, shark[i].x, shark[i].y) <= (player.r + shark[i].r) / 2){
	 points=-1;
	 console.log(points);
	 shark.splice(i,1);
	 } 
	 else if (shark[i].y > h){
	 shark.splice(i,1);
	 }
  }    

 text('Level 2', w/2, h*1/8); 
text('Fish Eaten:' + points, w/2, h*9/10); 

 if (points >= 40){
   state = "win";
 }
  
 if (points <= -1){
   state = "lose";
 }  
  
}


function level3(){
  background(130, 180, 250);

  if (random(1)<= 0.05){
	  fishc.push(new FishC());
  }  
  
  if (random(1)<= 0.001){
	  shark.push(new Shark());
  }  
  
  player.display();
  player.move();
  
  
  for (let i = 0; i < fishc.length; i++){
	  fishc[i].display();
      fishc[i].move();  
  }
  
  for (let i = 0; i < shark.length; i++){
	  shark[i].display();
      shark[i].move();  
  }
  
  //check  for collision, if there is a collision increase points by 1 AND splice that fishc out of array
  
  for (let i = fishc.length - 1; i >= 0; i--) {
  if (dist(player.x, player.y, fishc[i].x, fishc[i].y) <= (player.r + fishc[i].r) / 2){
	 points++;
	 console.log(points);
	 fishc.splice(i,1);
    } else if (fishc[i].y > h){
     fishc.splice(i,1);
    }
  }  
  
  for (let i = shark.length - 1; i >= 0; i--) {
  if (dist(player.x, player.y, shark[i].x, shark[i].y) <= (player.r + shark[i].r) / 2){
	 points=-1;
	 console.log(points);
	 shark.splice(i,1);
	 } 
	 else if (shark[i].y > h){
	 shark.splice(i,1);
	 }
  }    
  
text('Points:' + points, w/2, h*4/5); 

 if (points >= 50){
   state = "win";
 }
  
 if (points <= -1){
   state = "lose";
 }  
  
}

function level1MouseClicked(){
}

function level2MouseClicked(){
}

// function level3MouseClicked(){
// }

function Lose(){
  background(176,170,150);
  textSize(100);
  stroke(255);
  text('YOU DIED',w/2,h/5);
  textSize(30);
  text('Click to Restart the Journey', w/2, h*4/5); 
  image(sharkImg, 300,300, 500, 500)
}

function Win(){
  background(176,170,150);
  textSize(100);
  stroke(255);
  text('YOU WIN',w/2,h * 1/7);
  textSize(30);
  text('Click to Restart the Journey', w/2, 550);  
  image(winImg, 300,300, 596,392)
  
}


function WinMouseClicked(){
  state = 'title';
  points = 0;

}  

function LoseMouseClicked(){
  state = 'title';
  points = 0;

}  



