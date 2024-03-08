let compass = 0;
let dir = 1;
let rad = 50;
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

    basic.pause(100)
    loops.everyInterval(1, function () {
    });

}
function checkCompass() {
    if (compass = finch.getFinchCompass()) {
        finch.stopMotors()
    }
}