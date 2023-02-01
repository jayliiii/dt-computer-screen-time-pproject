function LED_on_1 () {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    WaitForXMinutes(0.1)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function Servo_motor_onoff (num: number) {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    servos.P0.setAngle(num)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function WaitForXMinutes (x: number) {
    for (let index = 0; index < x * 60; index++) {
        basic.pause(1000)
    }
}
function LED_on_2 () {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    WaitForXMinutes(0.1)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
pins.setAudioPin(AnalogPin.P3)
servos.P0.setAngle(90)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P4) == 0) {
        WaitForXMinutes(0.1)
        LED_on_2()
        if (pins.digitalReadPin(DigitalPin.P4) == 0) {
            WaitForXMinutes(0.1)
            LED_on_1()
            if (pins.digitalReadPin(DigitalPin.P4) == 0) {
                WaitForXMinutes(0.1)
                LED_on_1()
            }
        }
        Servo_motor_onoff(0)
        WaitForXMinutes(0.1)
        Servo_motor_onoff(90)
    }
})
