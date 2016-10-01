background(0);

var a = -45;
var speed = 145;

var b = -75;
var speed2 = 5;

var c = a + b;
var speed3 = speed * speed2;

var x = -45;
var y = -72;
var z = 160;
var a = -49;
var b = -66;
var c = -67;
var d = 418;
var speed4 = 1;

var draw = function(){


	a += speed;
	stroke(255, 0, 0);
	ellipse(0, 0, a, a);

	b += speed2;
	stroke(255, 30, 0);
	ellipse(400, 400, b, b);
	
	c += speed3;
	stroke(237, 69, 69);
	ellipse(200, 200, c, c);
	
	a += speed;
	stroke(255, 119, 0);
	ellipse(0, 400, a, a);

	b += speed2;
	stroke(255, 255, 0);
	ellipse(400, 0, b, b);
};

var draw = function() {
    
   noStroke();
    fill(255, 0, 0);
    rect(x, x, 45, 67);
    x += speed4;
    
    fill(0, 255, 0);
    rect(393 - y, y, 45, 67);
    y += speed4;
    
    fill(0, 0, 255);
    rect(a, z, 45, 67);
    a +=speed4;
    
    fill(255, 255, 8);
    rect(188, b, 45, 67);
    b += speed4;
    
    fill(255, 89, 0);
    rect(c, 282, 45, 67);
    c += speed4;
    
    fill(14, 218, 245);
    rect(d, 51, 45, 67);
    d -= speed4;
};

