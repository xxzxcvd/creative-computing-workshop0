function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  let x = 100;
  let y = 100;
  let size = 50;
  let colorValue = 255;
  
  function draw() {
    // Set color based on mouse position
    if (mouseX > 200) {
      colorValue = 0;
    } else {
      colorValue = 255;
    }
    
    // Draw a triangle
    fill(colorValue);
    triangle(x, y, x + size, y, x + size / 2, y + size);
    
    // Draw a line
    stroke(0);
    line(x + size, y + size, x + 2 * size, y + size);
    
    // save
    if (keyIsPressed && key === 's') {
      saveCanvas('mySketch', 'png');
    }
  }