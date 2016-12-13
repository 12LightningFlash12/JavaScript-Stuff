/*
Controls:
1 - Line tool
2 - Circle tool
3 - Square tool
4 - Pen tool
Space - Clear all
*/

var draw = function() {
    
    if(key.toString() === '1'){
        strokeWeight(1);    //change me
        stroke(0, 0, 0);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }else if(key.toString() === '2'){
        noStroke();
        fill(255, 0, 0); //change me
        ellipse(pmouseX, pmouseY, 10, 10);  //change the last 2 numbers
    }else if(key.toString() === ' '){
        fill(255, 255, 255);
        rect(-50, -50, 500, 500);
    }else if(key.toString() === '3'){
        noStroke();
        fill(255, 0, 0);    //change me
        rect(mouseX, mouseY, 10, 10);   //change the last 2 numbers
    }else if(key.toString() === '4'){
        strokeWeight(3);
        stroke(0, 0, 0);    //change me
        line(pmouseX, pmouseY + 2, mouseX, mouseY + 2);
        line(pmouseX, pmouseY, mouseX, mouseY);
        line(pmouseX, pmouseY - 2, mouseX, mouseY - 2);
    }
};
