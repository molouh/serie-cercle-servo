let objet = ""
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
basic.forever(function () {
    objet = serial.readString()
    if (objet == "Classe vide") {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (objet == "cercle") {
        servos.P0.run(50)
    } else if (objet == "Carré") {
        servos.P0.run(0)
    } else if (objet == "Triangle") {
        servos.P0.run(-50)
    } else {
    	
    }
})
