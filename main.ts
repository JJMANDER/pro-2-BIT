let OPCIONES = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    OPCIONES = randint(1, 3)
    if (OPCIONES == 0) {
        basic.showLeds(`
            . . # # .
            . . # . .
            . . # . .
            . # # . .
            . # # . .
            `)
        music.play(music.stringPlayable("C E F E F E F D ", 120), music.PlaybackMode.UntilDone)
        basic.pause(100)
    } else if (OPCIONES == 2) {
        basic.showLeds(`
            . . # # .
            . . # . #
            . . # . .
            . # # . .
            . # # . .
            `)
        music.play(music.stringPlayable("C D E F E D E D ", 120), music.PlaybackMode.UntilDone)
        basic.pause(100)
    } else if (OPCIONES == 2) {
        basic.showIcon(IconNames.Scissors)
        music.play(music.stringPlayable("A C5 B G B D E D ", 120), music.PlaybackMode.UntilDone)
    }
})
