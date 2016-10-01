var x = 19;

var draw = function() {
    x--;
    rotate(x + 5);
    rect(x + 0, x + 300, x - 15, x - 15, x - 150);
};

