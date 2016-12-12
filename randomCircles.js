//setup
noStroke();
background(0, 0, 0);

//Loop
var draw = function() {
    //variables
    var x = random(0, 400);
    var y = random(0, 400);
    var w = random(0, 40);
    
    //color variables
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    
    //Drawing circles
    fill(r, g, b);
    ellipse(x, y, w, w);
};
