let compass = 0;
let dir = 1;
let rad = 0.1;
input.onButtonPressed(Button.A, function() {
    finch.stopMotors()
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
Circle();

Square();
function Square() {
    for (let i = 0; i < 5; i++) {
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Right, 90, 50)
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
Triangle ();