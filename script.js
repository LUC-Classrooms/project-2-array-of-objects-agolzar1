/*
 Project 2 - Array of Objects
 Name: Ariana Golzar
 Comments: Spinning array of cows 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var cows = new Array(15); // empty array with 10 spaces

function setup(){ // sets up the sketch
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  for(let i = 0; i < cows.length; i++){ // initialize cow length
    cows [i] = new Cow(random(width), random (height)); //initialize cow array
    cows [i].shrink(random(.2, .5)); // initialize shrinking of array
    }
} // end of set up


function draw(){ // draw something 
  // this function runs again and again (60x per second)
  background(200); //light gray background
  for (let i = 0; i < cows.length; i++){ // loops through the array
    cows[i].display (); // displays the cows
    cows[i].move(); // moves the cows
    cows[i].spin(); // spins the cows 
  }
} // end of draw 


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