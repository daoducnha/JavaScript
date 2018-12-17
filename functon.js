function bark(name, weight){
    if(weight > 20){
        console.log(name + " says WOOF WOOF");
    }else{
        console.log(name + " says woof woof");
    }
}

// bark("rover", 23);
// bark("dof", 15);
// bark("game", 20);
// bark("obit", 21);

function whatShallIWear(temp){
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    }else{
        console.log("Wear t-shirt");
    }
}

whatShallIWear(60);
whatShallIWear(50);
whatShallIWear(80);

function doIt(param){
    globleVar = 10;
    param = 2;
}
var test = 1;
doIt(test);
console.log(test);
console.log(globleVar);

var point = 0;
function playTurn(player, location){
    point = 0;
    if(location == 1){
        point = point + 100;
    }
    return point;
}

var total = playTurn('joe', 1);
alert(point);
