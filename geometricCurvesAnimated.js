var z = 400;
var xy = 5;
var x1, y1;
var x2, y2;

//Side 1
var side1 = function(){
    x1 = 0;
    y1 = 0;
    x2 = 5;
    y2 = 400;
    
    line(x1, y1, x2, y2);
    
    for(var s1 = 0; s1 < z / xy; s1 ++){
        y1 += xy;
        x2 += xy;
        
        line(x1, y1, x2, y2);
    }
};

//Side 2
var side2 = function(){
    x1 = 0;
    y1 = 400;
    x2 = 400;
    y2 = 395;
    
    line(x1, y1, x2, y2);
    
    for(var s2 = 0; s2 < z / xy; s2 ++){
        x1 += xy;
        y2 -= xy;
        
        line(x1, y1, x2, y2);
    }
};

//Side 3
var side3 = function(){
    x1 = 400;
    y1 = 400;
    x2 = 395;
    y2 = 0;
    
    line(x1, y1, x2, y2);
    
    for(var s3 = 0; s3< z / xy; s3 ++){
        y1 -= xy;
        x2 -= xy;
        
        line(x1, y1, x2, y2);
    }
};

//Side 4
var side4 = function(){
    x1 = 400;
    y1 = 0;
    x2 = 0;
    y2 = 5;
    
    line(x1, y1, x2, y2);
    
    for(var s4 = 0; s4 < z / xy; s4 ++){
        x1 -= xy;
        y2 += xy;
        
        line(x1, y1, x2, y2);
    }
};

//Calling Functions
side1();
side2();
side3();
side4();

