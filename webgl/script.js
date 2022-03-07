function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    ortho(-width, width, height, -height/2, 0.1, 100);
  }
  
  function draw(){
    background(255);
    box();
    

  }