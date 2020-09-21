var distanceToMonster = 0;
const EG = 9.81;
const MOG = 1.62;
const MAG = 3.69;
const JG = 24.79;
var g = 0;
setMonster();


function setMonster() {
    var monster = document.getElementById("monster");
    distanceToMonster = Math.random() * 1000 + 100;
    distanceToMonster = Math.round(distanceToMonster);
    monster.style.left = distanceToMonster + "px";
}

function myMove() {
    var elem = document.getElementById("phone");
    var upPos = 350;
    var rightPos = 0;
    var time = 1;
    var id = setInterval(throwing, 10);




    //Userinputs

    //For the input of power. Only allows 10 - 90.
    var power = document.getElementById("power").value;
    if (document.getElementById("power").value > 90) {
        power = 90;
    } else if (document.getElementById("power").value < 10) {
        power = 10;
    }
    //For the input of angle. Only allows 1 - 90.
    var angle = document.getElementById("angle").value;
    if (document.getElementById("angle").value >= 90) {
        angle = 90;
    } else if (document.getElementById("angle").value <= 1) {
        angle = 1;
    }

    angle = angle * (Math.PI / 180);
    var posX = Math.cos(angle) * power;
    var posY = Math.sin(angle) * power;

    // var throwDistance = ((power * power) * Math.sin(2 * angle)) / g;
    // throwDistance = Math.ceil(throwDistance);

    function throwing() {
        if (upPos > 390) {
            clearInterval(id);
        } else {
            upPos = upPos - up();
            rightPos = rightPos + right();
            elem.style.top = upPos + "px";
            elem.style.left = rightPos + "px";
            time = time + 1;
            if (rightPos - distanceToMonster < 50 && rightPos - distanceToMonster > -50 && upPos > 380) {
                alert("You did hit the monster!");
            }
        }
    }

    //function for the phone to move up
    function up() {
        var goUp = posY - (g * time)
        return goUp;
    }
    //function for the phone to move right
    function right() {
        var goRight = posX * time;
        return goRight;
    }
}
//change the gravitation
function setEarth() {
    g = EG;
}

function setMoon() {
    g = MOG;
}

function setMars() {
    g = MAG;
}

function setJupiter() {
    g = JG;
}