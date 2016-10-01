draw = function() {
    background(153, 153, 153);

    var m = millis() / 100; //speed
    
    var m1 = (Math.sin(m/3.1) + 1);
    var m2 = (Math.sin(m/3.23) + 1);
    var m3 = (Math.sin(m/4.24) + 1)*3;
    var m4 = (Math.sin(m/3.56) + 1)*2;

    var lastr = 0;
    for(var r=10; r<=60; r+=4) {
        var ox = 0, oy = 0;
        
        for(var d=0; d<=2*Math.PI; d+=0.03) {
            var dr =  (Math.sin(d*7 + m/2  )+ 2   ) * m1 * r;
                dr += (Math.sin(d*12 + m/3 )+ 1   ) * m2 * r;
                dr += (Math.sin(d*4 + m/5  )+ 1   ) * m3 * r;
                dr += (Math.sin(d*5 + m/6  )+ 1   ) * m4 * r;
            
            dr/=5;
            //dr = r*2;
            
            var x = Math.sin(d) * dr + 200;
            var y = Math.cos(d) * dr + 200;
            if(ox!==0 && oy!==0) {
                line(x,y, ox, oy);
            }
            
            ox = x;
            oy = y;
        }
       
       lastr = r; 
    }
};

