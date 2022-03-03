let img;
function preload() {
  img = loadImage('https://images.unsplash.com/photo-1634024242828-74dd2ad26d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80');
    //img = loadImage('https://images.unsplash.com/photo-1574786201468-574f3151871e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80')
    //img = loadImage('https://images.unsplash.com/photo-1645341777045-8f18b88e2712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')
}

function setup() {
    createCanvas(200, 200);
    img.resize(width, height);

    image(img, 0, 0);
    noSmooth();
  }

function draw() {
    img.loadPixels();

    
    if(mouseIsPressed) {
        for (let i = 0; i < 1000; i++) {
        sortPixels();
        }
    }
    img.updatePixels();
  
    image(img, 0, 0, width, height);

    
    
}

function sortPixels() {
    const x = random(img.width);
    const y = random(img.height - 1);
      const colorOne = img.get(x, y);
      const colorTwo = img.get(x, y + 1);
  
    const totalOne = red(colorOne) + green(colorOne) + blue(colorTwo);
    const totalTwo = red(colorTwo) + green(colorTwo) + blue(colorTwo);
  

    //up
    if (totalOne < totalTwo && mouseY < height/2) {
        img.set(x, y, colorTwo);
        img.set(x, y + 1, colorOne);
    }
    //down
    else if (totalOne > totalTwo && mouseY > height/2) {
        img.set(x, y, colorTwo);
        img.set(x, y + 1, colorOne);
    }
  }

function mousePressed() {

}