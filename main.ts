let compass = 0;
let dir = 1;
let rad = 0.1;
let choice = 0;
input.onButtonPressed(Button.A, function() {
    finch.stopMotors()
})
input.onButtonPressed(Button.B, function () {
    choice = choice+1;
    
    basic.showNumber(choice);
})

input.onGesture(Gesture.Shake, function() {
    
    basic.pause(1000);
    if (choice = 0){
        hexagon();
    }else if (choice=1){
        Circle();
    } else if (choice = 2) {
        Square();
    } else if (choice = 3) {
        Triangle();
    }
})
finch.startFinch()
finch.setMove(MoveDir.Forward, 10, 50)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
})
function Circle() {
    let compass = finch.getFinchCompass();
    if (dir = 1) {
        finch.startMotors(100, 100 * rad);
    }
    else if (dir = 0) {
        finch.startMotors(100 * rad, 100);
    }

    basic.pause(3000)
    
    finch.stopMotors()

}
function checkCompass() {
    
}

function Square() {
    for (let i = 0; i < 5; i++) {
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Right, 90, 50)
    }
}
function hexagon(){

    for (let i = 0; i < 5; i++) {
        
        while (finch.getDistance()<10) {
            
            finch.startMotors(100, 100);

        }

        finch.stopMotors()
        finch.setTurn(RLDir.Right, 60, 100)
    }
}


function Triangle () {
 finch.setMove(MoveDir.Forward, 10, 50)
finch.setTurn(RLDir.Right, 120, 50)
finch.setMove(MoveDir.Forward, 10, 50)
finch.setTurn(RLDir.Right, 120, 50)
finch.setMove(MoveDir.Forward, 10, 50)
finch.setTurn(RLDir.Right, 120, 50)
}

