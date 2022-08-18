input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Steps))
    datalogger.log(datalogger.createCV("Steps: ", Steps))
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _this = 30 * Steps
    _this = _this / 100
    basic.showString("" + (_this))
})
input.onGesture(Gesture.ThreeG, function () {
    Steps += 1
})
let _this = 0
let Steps = 0
Steps = 0
