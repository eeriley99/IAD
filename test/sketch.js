//3 Random

function setup() {
  createCanvas(windowWidth, windowWidth);
  noFill();
  noStroke();
  frameRate(1);
  cursor('https://eeriley99.github.io/code_sketchbook/icons-master/clickFinger.gif');
}

function draw() {
  background(255);

  var windowPane = 10; // padding around box array
  var num = 12; //number of boxes in array
  var shift = random(-15, 15); //degree of shift in quad
  var space = 100; //space between squares

  translate(windowPane + space / 2, windowPane + space / 2); //(x,y) start point offset for padding

  var sideLen = (windowWidth - 2 * windowPane) / num //length of individual side of a box

  for (var x = 0; x < num * sideLen; x = x + sideLen) {
    for (var y = 0; y < num * sideLen; y = y + sideLen) {

      fill(0, random(200, 255), random(200, 255), 30);

      //a random shift is added to each vertex
      // add length of individual side of a box (num) and 
      //subtract space between squares (space) to keep spacing true

      triangle(random(-shift, shift) + x,
        random(-shift, shift) + y+100,
        random(-shift, shift) + x + 50,
        random(-shift, shift) + y+0,
        random(-shift, shift) + x + 100,
        random(-shift, shift) + y+100)

    }
  }

}