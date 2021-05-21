'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;

function setup() {
 cnv = createCanvas(w, h);

textFont('Helvetica');

player = new Player;

coin = new Coin();

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
    case 'win':
    Win();
    cnv.mouseClicked(WinMouseClicked);
    break;
    default:
    break;
  }
  
  //if (state === 'title') {
  //  title();
  //   cnv.mouseClicked(titleMouseClicked); 
  //} else if (state === 'level 1' && points > 50){
  //  level1();
  //   cnv.mouseClicked(level1MouseClicked);
  //} else {
  //}  
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
}

function titleMouseClicked(){
   console.log('canvas is clicked on title page');
   state = 'level 1'
 }

function level1(){
  background(50, 150, 200);

  
  player.display();
  player.move();
  
  coin.display();
  coin.move();
  
  //check  for collision, if there is a collision increase points by 1
  if (dist(player.x, player.y, coin.x, coin.y) <= (player.r + coin.r) / 2){
	 points++;
	 console.log(points);
  }  
  
text('Points:' + points, w/2, h*4/5); 
 
}

function level1MouseClicked(){
//  points++;
//  console.log('points = ' + points);

//  if (points >= 10){
//    state = "win";
//  }
}

function Win(){
  background(176,170,150);
  textSize(100);
  stroke(255);
  text('YOU WIN',w/2,h/5);
  textSize(30);
  text('Click to Restart the Journey', w/2, h*4/5);  
}


function WinMouseClicked(){
  state = 'level 1';
  points = 0;
}  
