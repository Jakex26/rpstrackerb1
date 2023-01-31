def on_gesture_shake():
    reset()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def reset():
    global P1, P2, Ties, Round
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    Ties = 0
    Round = 0
    OLED.write_string_new_line("Shall We play A game?")
    basic.pause(2000)
    OLED.clear()
    OLED.write_string_new_line("Player1 score:" + str(P1))
    OLED.new_line()
    OLED.write_string_new_line("Player2 score:" + str(P2))
    OLED.new_line()
    OLED.write_string_new_line("Ties:" + str(Ties))
    OLED.new_line()
    OLED.write_string_new_line("Rounds:" + str(Round))
Round = 0
Ties = 0
P2 = 0
P1 = 0
reset()