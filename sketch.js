function setup() {
  createCanvas(600, 600);
  background("pink");
}

function draw() {

  stroke("blue");
  fill("purple");

  //console.log (mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
