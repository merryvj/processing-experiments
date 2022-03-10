let asteroids;
function preload() {
  let url =
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY";
  asteroids = loadJSON(url);

}

function setup() {
  createCanvas(1000, 500);
  noLoop();
}

function draw() {
    asteroids = asteroids.near_earth_objects;
    console.log(asteroids);
    for (let i = 0; i < Object.keys(asteroids).length; i++) {
        let date = Object.keys(asteroids)[i];
        for (let roid in asteroids[date]) {
            let data = asteroids[date][roid];
            let diameter = data.estimated_diameter.kilometers.estimated_diameter_min;
            ellipse(data.close_approach_data[0].miss_distance.lunar, height/2, diameter * 100);
            
        }
    }
}
