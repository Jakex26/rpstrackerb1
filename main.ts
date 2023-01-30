input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    Ties = 0
    Round = 0
    OLED.writeStringNewLine("Shall We play A game?")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("Player1 score:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player2 score:" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Round)
}
let Round = 0
let Ties = 0
let P2 = 0
let P1 = 0
reset()
