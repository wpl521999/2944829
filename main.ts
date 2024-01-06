basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (input.soundLevel() > 50) {
        led.setBrightness(255)
        basic.pause(5000)
    } else {
        led.setBrightness(0)
    }
})
