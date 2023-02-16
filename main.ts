function LED_on_2 () {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    WaitForXMinutes(0.1)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function WaitForXMinutes (x: number) {
    for (let index = 0; index < x * 60; index++) {
        basic.pause(1000)
    }
}
function motor_run () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function LED_on_1 () {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    WaitForXMinutes(0.1)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
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
        motor_run()
        WaitForXMinutes(0.1)
        motor_run()
    }
})
