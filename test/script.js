function setup() {

    createCanvas(600, 600);
    background(0);
    noStroke();
    fill(255);
    for (let i = 0; i < 20; i++){
      let randx = random(0, 600);
      let randy = random(0, 600);
      let randrad = random(1, 5);
      let star = new Star(randx, randy, randrad);
      ellipse(star.x, star.y, star.radius, star.radius);
    }
  }
  
  function draw() {
    
  }

  class Star {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  }