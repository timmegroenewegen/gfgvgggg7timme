def on_button_pressed_a():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(100)
    basic.show_icon(IconNames.FABULOUS)
    basic.pause(1000)
    basic.show_string("Jo bro")
    basic.pause(1000)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.pause(100)
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(100)
    basic.show_icon(IconNames.SQUARE)
    basic.pause(100)
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    basic.show_leds("""
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . # . .
        . . . . .
        . # . # .
        # . # . #
        # . . . #
        """)
    basic.pause(100)
    basic.show_leds("""
        . # # # .
        . . # . .
        . . . . .
        . # . # .
        # . # . #
        """)
    basic.pause(100)
    basic.show_leds("""
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        . # . # .
        """)
    basic.pause(100)
    basic.show_leds("""
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . # . .
        . . . . .
        . # . # .
        # # # # #
        # # # # #
        """)
    basic.pause(100)
    basic.show_leds("""
        . # . # .
        . . # . .
        . . . . .
        . # . # .
        # # # # #
        """)
    basic.pause(100)
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        . # . # .
        """)
    basic.pause(100)
    basic.show_leds("""
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

basic.show_leds("""
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    """)

def on_forever():
    pass
basic.forever(on_forever)
