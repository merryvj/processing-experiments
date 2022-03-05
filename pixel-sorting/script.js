let img;
let imgOptions;

function preload() {
    img = loadImage('https://images.unsplash.com/photo-1634024242828-74dd2ad26d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80');
    img1 = loadImage('https://images.unsplash.com/photo-1634024242828-74dd2ad26d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80');
    img2 = loadImage('https://images.unsplash.com/photo-1511489731872-324afc650052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80');
    img3 = loadImage('https://images.unsplash.com/photo-1513564774965-ac25ddf81e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80');
    img4 = loadImage('https://images.unsplash.com/photo-1645341777045-8f18b88e2712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80');
    img5 = loadImage('https://images.unsplash.com/photo-1600030808777-b063d6c20a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80');
    imgOptions = [
        img1, img2, img3, img4, img5
     ]
}

function setup() {
    createCanvas(100, 100);
    sel = createSelect();
    sel.position(0,0);
    sel.option('1');
    sel.option('2');
    sel.option('3');
    sel.option('4');
    sel.option('5');
    sel.changed(loadImg)

    img.resize(width, height);
    image(img, 0, 0);
    noSmooth();

  }

function draw() {
    img.loadPixels();

    
    if(mouseIsPressed) {
        for (let i = 0; i < 3000; i++) {
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

function loadImg() {
    let selectedImg = sel.value() - 1;
    img = imgOptions[selectedImg];

    img.resize(width, height);
    image(img, 0, 0);
    noSmooth();

}