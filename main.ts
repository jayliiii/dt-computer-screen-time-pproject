function Motornegative (num: number) {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    servos.P0.setAngle(0)
    WaitForXMinutes(0.01)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function LED_on_2 () {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    WaitForXMinutes(0.1)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function Motorpositive (num: number) {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    servos.P0.setAngle(180)
    WaitForXMinutes(0.01)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function WaitForXMinutes (x: number) {
    for (let index = 0; index < x * 60; index++) {
        basic.pause(1000)
    }
}
function LED_on_1 () {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    WaitForXMinutes(0.1)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function Motoroff (num: number) {
    servos.P0.setAngle(90)
}
servos.P0.setAngle(90)
pins.setPull(DigitalPin.P4, PinPullMode.PullUp)
pins.setAudioPin(AnalogPin.P3)
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
        Motorpositive(1)
        Motoroff(1)
        WaitForXMinutes(0.1)
        Motornegative(1)
        Motoroff(1)
    }
})
