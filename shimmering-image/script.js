let img;


function preload() {
    img = loadImage('https://images.unsplash.com/photo-1511489731872-324afc650052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80');

}

function setup() {
    createCanvas(1000, 600);
    img.resize(width, height);
    image(img, 0, 0);
}

function draw() {
    
}