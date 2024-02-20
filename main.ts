input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Fabulous)
    basic.pause(1000)
    basic.showString("Jo bro")
    basic.pause(1000)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.showIcon(IconNames.Diamond)
    basic.pause(100)
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . . . .
        . # . # .
        # . # . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . . . .
        . # . # .
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # . # .
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
	
})
