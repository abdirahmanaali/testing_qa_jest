let myFunction = require('./function');

test ('return two',() => {
    expect(myFunction.returnTwo()).toBe(2)
})

test ('greeting test', () => {
    expect(myFunction.greetings('James')).toBe('Hello, James.')
})

test ('greeting test', () => {
    expect(myFunction.greetings('Jill')).toBe('Hello, Jill.')
})

test ('add test1', () => {
    expect(myFunction.add(1, 2)).toBe(3)
})

test ('add test2', () => {
    expect(myFunction.add(5, 9)).toBe(14)
})

describe('Math Functions', () => {
    test('multiply', () => {
        expect(myFunction.multiply(7, 3)).toBe(21)
    })

    test('divide', () => {
        expect(myFunction.divide(64, 2)).toBe(32)
    })

    test('subtract', () => {
        expect(myFunction.subtract(22, 5)).toBe(17)
    })
})