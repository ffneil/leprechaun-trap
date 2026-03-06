input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, startAngle)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, captureAngle)
})
let Distance = 0
let captureAngle = 0
let startAngle = 0
startAngle = 55
captureAngle = 20
pins.servoWritePin(AnalogPin.P1, startAngle)
basic.pause(5000)
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P13,
    PingUnit.Inches
    )
    if (Distance > 0 && Distance < 6) {
        basic.showNumber(Distance)
        pins.servoWritePin(AnalogPin.P1, captureAngle)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
