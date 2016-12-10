function start(){
    logo();
    sideScreen();
	lines();
	other();
	gameScreen();
}

function gameScreen(){
    var a = 20;
    var b = 25;
    var c = 10;
    var d = 4;
    
    var zA = new Rectangle(a, a);
    zA.setPosition(b * 9 + 3, b * 18 + 8);
    zA.setColor(Color.black);
    add(zA);
    
    var zB = new Rectangle(a, a);
    zB.setPosition(b * 8 + 7, b * 18 + 8);
    zB.setColor(Color.black);
    add(zB);
    
    var zC = new Rectangle(a, a);
    zC.setPosition(b * 9 + 3, b * 17 + 12);
    zC.setColor(Color.black);
    add(zC);
    
    var zD = new Rectangle(a, a);
    zD.setPosition(b * 8 + 7, b * 17 + 12);
    zD.setColor(Color.black);
    add(zD);
    
    var zE = new Rectangle(c, c);
    zE.setPosition(b * 9 + 8, b * 18 + 13);
    zE.setColor(Color.white);
    add(zE);
    
    var zF = new Rectangle(c, c);
    zF.setPosition(b * 8 + 12, b * 18 + 13);
    zF.setColor(Color.white);
    add(zF);
    
    var zG = new Rectangle(c, c);
    zG.setPosition(b * 9 + 8, b * 17 + 17);
    zG.setColor(Color.white);
    add(zG);
    
    var zH = new Rectangle(c, c);
    zH.setPosition(b * 8 + 12, b * 17 + 17);
    zH.setColor(Color.white);
    add(zH);
    
    var yA = new Rectangle(a, a);
    yA.setPosition(b - 23, b * 18 + 8);
    yA.setColor(Color.black);
    add(yA);
    
    var yB = new Rectangle(a, a);
    yB.setPosition(b - 23, b * 17 + 12);
    yB.setColor(Color.black);
    add(yB);
    
    var yC = new Rectangle(a, a);
    yC.setPosition(b - 23, b * 16 + 16);
    yC.setColor(Color.black);
    add(yC);
    
    var yD = new Rectangle(a, a);
    yD.setPosition(b - 23, b * 15 + 20);
    yD.setColor(Color.black);
    add(yD);
    
    var yE = new Rectangle(c, c);
    yE.setPosition(b - 18, b * 18 + 13);
    yE.setColor(Color.white);
    add(yE);
    
    var yF = new Rectangle(c, c);
    yF.setPosition(b - 18, b * 17 + 17);
    yF.setColor(Color.white);
    add(yF);
    
    var yG = new Rectangle(c, c);
    yG.setPosition(b - 18, b * 16 + 21);
    yG.setColor(Color.white);
    add(yG);
    
    var yH = new Rectangle(c, c);
    yH.setPosition(b - 18, b * 15 + 25);
    yH.setColor(Color.white);
    add(yH);
    
    var yI = new Rectangle(d, d);
    yI.setPosition(b - 15, b * 18 + 16);
    yI.setColor(Color.black);
    add(yI);
    
    var yJ = new Rectangle(d, d);
    yJ.setPosition(b - 15, b * 17 + 20);
    yJ.setColor(Color.black);
    add(yJ);
    
    var yK = new Rectangle(d, d);
    yK.setPosition(b - 15, b * 16 + 24);
    yK.setColor(Color.black);
    add(yK);
    
    var yL = new Rectangle(d, d);
    yL.setPosition(b - 15, b * 15 + 28);
    yL.setColor(Color.black);
    add(yL);

    var xA = new Rectangle(a, a);
    xA.setPosition(b * 2 - 27, b * 18 + 8);
    xA.setColor(Color.black);
    add(xA);
    
    var xB = new Rectangle(a, a);
    xB.setPosition(b * 2 - 27, b * 17 + 12);
    xB.setColor(Color.black);
    add(xB);
    
    var xC = new Rectangle(a, a);
    xC.setPosition(b * 2 - 27, b * 16 + 16);
    xC.setColor(Color.black);
    add(xC);
    
    var xD = new Rectangle(a, a);
    xD.setPosition(b * 3 - 31, b * 18 + 8);
    xD.setColor(Color.black);
    add(xD);
}

function logo(){
    var a = 5;
    
    //First T
    var tA = new Rectangle(a, a);
    tA.setPosition(a * 52, a);
    tA.setColor(Color.red);
    add(tA);
    
    var tB = new Rectangle(a, a);
    tB.setPosition(a * 53 + 1, a);
    tB.setColor(Color.red);
    add(tB);
    
    var tC = new Rectangle(a, a);
    tC.setPosition(a * 54 + 2, a);
    tC.setColor(Color.red);
    add(tC);
    
    var tD = new Rectangle(a, a);
    tD.setPosition(a * 53 + 1, a * 2 + 1);
    tD.setColor(Color.red);
    add(tD);
    
    var tE = new Rectangle(a, a);
    tE.setPosition(a * 53 + 1, a * 3 + 2);
    tE.setColor(Color.red);
    add(tE);
    
    //E
    var eA = new Rectangle(a, a);
    eA.setPosition(a * 56 + 4, a);
    eA.setColor(Color.red);
    add(eA);
    
    var eB = new Rectangle(a, a);
    eB.setPosition(a * 57 + 5, a);
    eB.setColor(Color.red);
    add(eB);
    
    var eD = new Rectangle(a, a);
    eD.setPosition(a * 56 + 4, a * 2 + 1);
    eD.setColor(Color.red);
    add(eD);
    
    var eE = new Rectangle(a, a);
    eE.setPosition(a * 56 + 4, a * 3 + 2);
    eE.setColor(Color.red);
    add(eE);
    
    var eF = new Rectangle(a, 3);
    eF.setPosition(a * 57 + 5, a * 2 + 2);
    eF.setColor(Color.red);
    add(eF);
    
    var eG = new Rectangle(a, a);
    eG.setPosition(a * 57 + 5, a * 3 + 2);
    eG.setColor(Color.red);
    add(eG);
    
    //Second T
    var tF = new Rectangle(a, a);
    tF.setPosition(a * 59+ 7, a);
    tF.setColor(Color.red);
    add(tF);
    
    var tG = new Rectangle(a, a);
    tG.setPosition(a * 60 + 8, a);
    tG.setColor(Color.red);
    add(tG);
    
    var tH = new Rectangle(a, a);
    tH.setPosition(a * 61 + 9, a);
    tH.setColor(Color.red);
    add(tH);
    
    var tI = new Rectangle(a, a);
    tI.setPosition(a * 60 + 8, a * 2 + 1);
    tI.setColor(Color.red);
    add(tI);
    
    var tJ = new Rectangle(a, a);
    tJ.setPosition(a * 60 + 8, a * 3 + 2);
    tJ.setColor(Color.red);
    add(tJ);
    
    //R
    var rA = new Rectangle(a, a);
    rA.setPosition(a * 63 + 11, a);
    rA.setColor(Color.red);
    add(rA);
    
    var rB = new Rectangle(a, a);
    rB.setPosition(a * 64 + 12, a);
    rB.setColor(Color.red);
    add(rB);
    
    var rD = new Rectangle(a, a);
    rD.setPosition(a * 63 + 11, a * 2 + 1);
    rD.setColor(Color.red);
    add(rD);
    
    var rE = new Rectangle(a, a);
    rE.setPosition(a * 63 + 11, a * 3 + 2);
    rE.setColor(Color.red);
    add(rE);
    
    var rF = new Rectangle(a, a);
    rF.setPosition(a * 64 + 12, a * 2 + 1);
    rF.setColor(Color.red);
    add(rF);
    
    var rG = new Rectangle(a, a);
    rG.setPosition(a * 65 + 13, a * 3 + 2);
    rG.setColor(Color.red);
    add(rG);
    
    //I
    var iA = new Rectangle(a, a);
    iA.setPosition(a * 67 + 15, a);
    iA.setColor(Color.red);
    add(iA);
    
    var iB = new Rectangle(a, a);
    iB.setPosition(a * 68 + 16, a);
    iB.setColor(Color.red);
    add(iB);
    
    var iC = new Rectangle(a, a);
    iC.setPosition(a * 69 + 17, a);
    iC.setColor(Color.red);
    add(iC);
    
    var iD = new Rectangle(a, a);
    iD.setPosition(a * 68 + 16, a * 2 + 1);
    iD.setColor(Color.red);
    add(iD);
    
    var iE = new Rectangle(a, a);
    iE.setPosition(a * 68 + 16, a * 3 + 2);
    iE.setColor(Color.red);
    add(iE);
    
    var iF = new Rectangle(a, a);
    iF.setPosition(a * 67 + 15, a * 3 + 2);
    iF.setColor(Color.red);
    add(iF);
    
    var iG = new Rectangle(a, a);
    iG.setPosition(a * 69 + 17, a * 3 + 2);
    iG.setColor(Color.red);
    add(iG);
    
    //S
    var sA = new Rectangle(a, a);
    sA.setPosition(a * 71 + 19, a - 3);
    sA.setColor(Color.red);
    add(sA);
    
    var sB = new Rectangle(a, a);
    sB.setPosition(a * 72 + 20, a - 3);
    sB.setColor(Color.red);
    add(sB);
    
    var sC = new Rectangle(a, a);
    sC.setPosition(a * 73 + 21, a - 3);
    sC.setColor(Color.red);
    add(sC);
    
    var sD = new Rectangle(a, a);
    sD.setPosition(a * 71 + 19, a * 2 - 2);
    sD.setColor(Color.red);
    add(sD);
    
    var sE = new Rectangle(a, a);
    sE.setPosition(a * 71 + 19, a * 3 - 1);
    sE.setColor(Color.red);
    add(sE);
    
    var sF = new Rectangle(a, a);
    sF.setPosition(a * 72 + 20, a * 3 - 1);
    sF.setColor(Color.red);
    add(sF);
    
    var sG = new Rectangle(a, a);
    sG.setPosition(a * 73 + 21, a * 3 - 1);
    sG.setColor(Color.red);
    add(sG);
    
    var sH = new Rectangle(a, a);
    sH.setPosition(a * 73 + 21, a * 4 - 0);
    sH.setColor(Color.red);
    add(sH);
    
    var sI = new Rectangle(a, a);
    sI.setPosition(a * 73 + 21, a * 5 + 1);
    sI.setColor(Color.red);
    add(sI);
    
    var sJ = new Rectangle(a, a);
    sJ.setPosition(a * 72 + 20, a * 5 + 1);
    sJ.setColor(Color.red);
    add(sJ);
    
    var sK = new Rectangle(a, a);
    sK.setPosition(a * 71 + 19, a * 5 + 1);
    sK.setColor(Color.red);
    add(sK);
}

function lines(){
	var lineA = new Line(0, 0, 0, 480);
	lineA.setLineWidth(5);
	lineA.setColor(Color.red);
	add(lineA);
	
	var lineB = new Line(0, 480, 250, 480);
	lineB.setLineWidth(5);
	lineB.setColor(Color.red);
	add(lineB);
	
	var lineC = new Line(250, 480, 250, 0);
	lineC.setLineWidth(5);
	lineC.setColor(Color.red);
	add(lineC);
	
	var lineD = new Line(250, 0, 0, 0);
	lineD.setLineWidth(5);
	lineD.setColor(Color.red);
	add(lineD);
}

function sideScreen(){
    var score = new Text("Score", "20pt Arial");
    score.setPosition(300, 75);
    score.setColor(Color.red);
    add(score);
    
    var scoreR = new Rectangle(100, 40);
    scoreR.setPosition(285, 80);
    scoreR.setColor(Color.orange);
    add(scoreR);
    
    var scoreN = new Text("52584", "15pt Arial");
    scoreN.setPosition(307, 107);
    scoreN.setColor(Color.black);
    add(scoreN);
    
    var lvlR = new Rectangle(100, 60);
    lvlR.setPosition(285, 150);
    lvlR.setColor(Color.red);
    add(lvlR);
    
    var lvl = new Text("Level", "15pt Arial");
    lvl.setPosition(319, 175);
    lvl.setColor(Color.black);
    add(lvl);
    
    var lvlN = new Text("11", "15pt Arial");
    lvlN.setPosition(345, 195);
    lvlN.setColor(Color.black);
    add(lvlN);
    
    var linesR = new Rectangle(100, 60);
    linesR.setPosition(285, 230);
    linesR.setColor(Color.yellow);
    add(linesR);
    
    var lines = new Text("Lines", "15pt Arial");
    lines.setPosition(325, 255);
    lines.setColor(Color.black);
    add(lines);
    
    var linesN = new Text("117", "15pt Arial");
    linesN.setPosition(335, 280);
    linesN.setColor(Color.black);
    add(linesN);
    
    var nextA = new Rectangle(100, 100);
    nextA.setPosition(285, 300);
    nextA.setColor(Color.black);
    add(nextA);
    
    var nextB = new Rectangle(90, 90);
    nextB.setPosition(290, 305);
    nextB.setColor(Color.white);
    add(nextB);
    
    var aA = new Rectangle(20, 20);
    aA.setPosition(310, 325);
    aA.setColor(Color.black);
    add(aA);
    
    var aB = new Rectangle(20, 20);
    aB.setPosition(332, 325);
    aB.setColor(Color.black);
    add(aB);
    
    var aC = new Rectangle(20, 20);
    aC.setPosition(310, 347);
    aC.setColor(Color.black);
    add(aC);
    
    var aD = new Rectangle(20, 20);
    aD.setPosition(332, 347);
    aD.setColor(Color.black);
    add(aD);
    
    var aE = new Rectangle(10, 10);
    aE.setPosition(315, 330);
    aE.setColor(Color.white);
    add(aE);
    
    var aF = new Rectangle(10, 10);
    aF.setPosition(337, 330);
    aF.setColor(Color.white);
    add(aF);
    
    var aG = new Rectangle(10, 10);
    aG.setPosition(315, 352);
    aG.setColor(Color.white);
    add(aG);
    
    var aH = new Rectangle(10, 10);
    aH.setPosition(337, 352);
    aH.setColor(Color.white);
    add(aH);
}

function other(){
	var circle = new Circle(1);
	circle.setPosition(1000, 1000);
	circle.setColor(Color.white);
	add(circle);
}
