function update_score_board () {
    OLED.clear()
    OLED.writeStringNewLine("Player1 score:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player2 score:" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Round)
}
input.onButtonPressed(Button.A, function () {
    OLED.writeStringNewLine("A")
    basic.pause(1000)
    OLED.clear()
    P1 += 1
    Round += 1
    update_score_board()
})
input.onButtonPressed(Button.AB, function () {
    OLED.writeStringNewLine("T")
    basic.pause(1000)
    OLED.clear()
    Ties += 1
    Round += 1
    update_score_board()
})
input.onButtonPressed(Button.B, function () {
    OLED.writeStringNewLine("B")
    basic.pause(1000)
    OLED.clear()
    P2 += 1
    Round += 1
    update_score_board()
})
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
    update_score_board()
}
let Round = 0
let Ties = 0
let P2 = 0
let P1 = 0
reset()
