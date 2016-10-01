var x = 115;
var y = 115;
var z = 375;
var a = -100;

var draw = function() {    
    background(0, 0, 0);

     fill(250, 46, 15);
     noStroke();
    ellipse(x, 350, 28, 28);
    
    stroke(69, 63, 63);
    fill(69, 63, 63);
    ellipse(0, 400, 200, 200);
    rect(17, 335, 145, 30);
   x += 2;

   noStroke();
   fill(250, 46, 15);
   ellipse(y, 45, 28, 28);
   
    stroke(69, 63, 63);
    fill(69, 63, 63);
    ellipse(0, 0, 200, 200);
    rect( 32, 29, 145, 30);
    y += 3;
   
   fill(250, 46, 15);
     noStroke();
    ellipse(z, 200, 28, 28);
    
    stroke(69, 63, 63);
    fill(69, 63, 63);
    ellipse(439, 200, 200, 200);
    rect(219, 184, 144, 30);
   z -= 2.39;
   
    noStroke();
   fill(250, 46, 15);
   ellipse(a, a, 28, 28);
   a += 2.80;
};
