input.onButtonPressed(Button.A, function () {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 16)
    MotorDriver.MotorRun(Motor.B, Dir.backward, 10)
    basic.pause(200)
    MotorDriver.MotorStop(Motor.A)
    MotorDriver.MotorStop(Motor.B)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
