class Coin {
	constructor(){
		this.r = 80;
		this.x = 680 - this.r;
		this.y = random(h);     
		// this.x = random(w);
		// this.y = 0 - this.r;
	}
	
  display(){
    image(coinImg, this.x, this.y, this.r, this.r);	  
  //  rect(this.x, this.y, this.r, this.r);	
  }
  
  move(){
	 this.x--; 
  }  
  
}
	