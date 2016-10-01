frameRate(200);
var ar = function(a, b, c, d, e, f){
    strokeWeight(5);
    stroke(179, 255, 255);
    arc(a, b, c, d, e, f);
    strokeWeight(22);
    stroke(179, 255, 255, 29);
    arc(a, b, c, d, e, f);
    strokeWeight(15);
    stroke(179, 255, 255, 29);
    arc(a, b, c, d, e, f);
    strokeWeight(35);
    stroke(179, 255, 255, 29);
    arc(a, b, c, d, e, f);
};
noFill();
colorMode(HSB);
draw = function() {
    background(0);
    pushMatrix();
    translate(200, 200);
    // all of the arcs
    for(var i = 0.2; i < 2.2; i+=0.2){
        ar(0, 0, 200 - (i-0.4)*100, 200 - (i-0.4)*100, frameCount * i % 360, frameCount * i % 360 + 180);
    }
    popMatrix();
};

