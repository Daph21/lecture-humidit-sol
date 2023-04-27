let humidite = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(humidite)
})
loops.everyInterval(2000, function () {
    serial.writeLine("" + (humidite))
})
basic.forever(function () {
    humidite = pins.analogReadPin(AnalogPin.P1)
})
