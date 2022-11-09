input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(x, y)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.toggle(x, y)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
	
})
