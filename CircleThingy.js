draw = function() {
    
    background(0);
    
    for (var i = 0 ; i < 10 ; i++) {
        for (var t = 0 ; t < 20 ; t++) {
            colorMode(HSB);
            pushMatrix();
            
            translate(200, 200);
            
            rotate(sin((i+20)+frameCount)*t*20+frameCount*3);
            
            noStroke();
            fill(frameCount*i%255, 255, 255);
            ellipse(i*20, sin(frameCount*t), 10, 10);
            
            popMatrix();
            colorMode(RGB);
        }
    }
    
};
