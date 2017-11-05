function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
}

function draw() {
  noStroke();
  fill(127, 127, 127, 5);
  rect(
    0,
    0,
    windowWidth,
    windowHeight);
}

function mousePressed() {
  const step = 5 + 5 * Math.random() | 0;
  const strokeColor =
        [
          Math.random() * 50 + 50 | 0,
          Math.random() * 20 | 0,
          Math.random() * 50 + 50 | 0
        ];
  window.setInterval(
    expandingCircle,
    500,
    mouseX,
    mouseY,
    0,
    step,
    strokeColor
  );
}

function expandingCircle(x, y, rad, step, strokeColor) {
  noFill();
  stroke(strokeColor[0], strokeColor[1], strokeColor[2]);
  ellipse(x, y, rad * 2, rad * 2);
  const dist = Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2));
  const timeout = 5 * step;
  if (rad < dist) {
    window.setTimeout(() => {
      expandingCircle(x, y, rad + step, step, strokeColor);
    }, timeout);
  } else {
    console.log("quitting");
  }
}


