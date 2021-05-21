class Shark {
	constructor(){
		this.r = 150;
		this.x = 800 - this.r;
		this.y = random(h);       
	}
	
  display(){
    image(sharkImg, this.x, this.y, this.r, this.r);	  
  //  rect(this.x, this.y, this.r, this.r);	
  }
  
  move(){
	 this.x--; 
  }  
  
}
	