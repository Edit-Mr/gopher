input.onPinPressed(TouchPin.P0, function () {
    P0 = 1
})
input.onButtonPressed(Button.A, function () {
    if (Status == 0) {
        Status = 1
    }
    if (Status == 1) {
        if (Button2 > 2) {
            Button2 += -1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Status == 1) {
        basic.showString("GO!")
        Status = 2
        game.startCountdown(600000)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Status == 1) {
        if (0 < 5) {
            Button2 += 1
        }
    }
})
let P2 = 0
let P1 = 0
let B: game.LedSprite = null
let A: game.LedSprite = null
let place = 0
let P0 = 0
let Button2 = 0
let Status = 0
game.setScore(0)
Status = 0
Button2 = 2
basic.showLeds(`
    . . # . .
    . # # . .
    # # # . .
    . # # . .
    . . # . .
    `)
basic.forever(function () {
    if (Status == 1) {
        basic.showNumber(Button2)
    }
    if (Status == 2) {
        basic.pause(randint(100, 2000))
        place = randint(1, Button2)
        if (1 == place) {
            A = game.createSprite(0, 0)
        } else if (2 == place) {
            B = game.createSprite(4, 0)
        } else if (3 == place) {
            P0 = 0
        } else if (4 == place) {
            P1 = 0
        } else {
            P2 = 0
        }
    }
})
