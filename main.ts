input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    angle += 15
    cuteBot.setServo(cuteBot.ServoList.S1, angle)
    OLED.writeNumNewLine(angle)
    if (angle == 180) {
        OLED.clear()
        cuteBot.setServo(cuteBot.ServoList.S1, 0)
        angle = 0
    }
})
let angle = 0
cuteBot.setServo(cuteBot.ServoList.S1, 75)
angle = 0
OLED.init(128, 64)
OLED.writeStringNewLine("prem A")
