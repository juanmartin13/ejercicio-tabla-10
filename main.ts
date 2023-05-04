let variable10 = 0
let variable1 = 0
input.onButtonPressed(Button.A, function () {
    variable10 = 10
    basic.showNumber(variable10)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable10)
})
