input.onButtonPressed(Button.A, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.previousTrack)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.volumeDown)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.play)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.nextTrack)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    devices.tellRemoteControlTo(MesRemoteControlEvent.volumeUp)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    # # . # #
    # # . # #
    `)
basic.forever(function () {
	
})
