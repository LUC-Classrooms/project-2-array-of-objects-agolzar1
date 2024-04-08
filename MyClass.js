/**
 * Add code for your class constructor in this file
 */
function Cow(tempX, tempY) { // constructor function
    this.x = tempX; // set x property from initial argument
    this.y = tempY; // set y property from second argument
    this.r = 0; // set r positioin
    this.s = 1; // set s position
    this.rSpeed = 0.2; // set r speed
    this.xSpeed = 0.5; // set x speed
    this.ySpeed = 0.1; // set y speed
  
    this.move = function () { // move the cows
      this.x += this.xSpeed; // update horizontal location
      if (this.x > width || this.x < 0) { // if off the screen
        this.xSpeed *= -1; // change direction
      } // end of if statement
      
      this.y += this.ySpeed; // update vertical location
      if(this.y > height || this.y < 0) { // if off the screen vertically
        this.ySpeed *= -1; // chnage direction vertically 
      } // end of if statement
  }
      this.spin = function (){ // spins the cows
        this.r += this.rSpeed; // speed of r
      } // end of spin statement
  
      this.shrink = function (s){ // shrinks the cows
        this.s = s; // cows shrunk
      } // end of shrink statement
  
    this.display = function (){ // show the object
      push();
      translate( this.x, this.y);
      rotate (this.r);
  
      scale (this.s);
  
      //head 
      strokeWeight (4);
      fill(255);
      ellipse (0 , 0 , 240 , 270);
  
      //nose
      fill (255, 192, 203);
      ellipse (0 , 75 , 160 , 120)
  
      //left eye 
      strokeWeight (2);
      fill (0);
      ellipse (- 35 , - 45 , 40 , 40);
  
      //right eye
      ellipse (30  , - 45 , 40 , 40);
  
     //top right circle on left eye
      fill(204);
      ellipse (- 30 , - 50 , 15 , 15);
  
     //top right circle on left eye
      ellipse (35 , - 50 , 15 , 15);
  
     //middle circle on left eye
      ellipse (- 45 , - 40 , 12 , 12);
  
     //middle right circle on right eye
      ellipse (20 , - 40 , 12, 12);
  
     //bottom circle on left eye
      ellipse (- 30 , - 35 , 10 , 10);
  
     //bottom circle on right eye
      ellipse (35 , - 35 , 10 , 10);
  
    //right nostril
      fill (0);
      ellipse (30 , 75 , 20 , 30);
  
    //left nostril
      ellipse (- 30  , 75 , 20 , 30);
  
      pop();
    }
  
  } // end of project 