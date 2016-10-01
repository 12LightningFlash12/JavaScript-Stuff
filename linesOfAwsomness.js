var a = -45;
var speed = 5;

var b = -75;
var speed2 = 5;

var c = a + b;
var speed3 = speed * speed2;

var draw = function(){

	noFill();

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

