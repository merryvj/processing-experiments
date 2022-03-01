function setup() {

    createCanvas(600, 600);
    background(0);
    noStroke();
    fill(255);
    for (let i = 0; i < 20; i++){
      
      let star = new Star();
      ellipse(star.x, star.y, star.radius, star.radius);
    }
  }
  
  function draw() {
    
  }

  class Star {
    constructor() {
      this.x = random(0, 600);
      this.y = random(0, 600);
      this.radius = random(1, 5);
    }
  }