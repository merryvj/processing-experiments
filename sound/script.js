
let wave;

function setup() {
  createCanvas(1000, 300);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.amp(1);
  wave.freq(300);
  wave.start();
}


function draw() {
  background(0);
  // let freq = map(mouseX, 0, width, 40, 880);
  // wave.freq(freq);
  let note = map(mouseX, 0, width, 16, 95);
  console.log(note);
  wave.freq(midiToFreq(note));

  let amp = map(mouseY, 0, height, 1, 0.01);
  wave.amp(amp);

  ellipse(mouseX, mouseY, note, amp * 100);
}
