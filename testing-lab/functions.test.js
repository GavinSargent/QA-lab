const{returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js')

test('returnTwo should return 2', ()=>{
    expect(returnTwo()).toBe(2)
})

describe('tests for greeting',()=>{
    test('greeting should return Hello, James.', ()=>{
        expect(greeting('James')).toEqual("Hello, James.")
    })

    test('greeting should return Hello, Jill.', ()=>{
        expect(greeting('Jill')).toEqual("Hello, Jill.")
    })

    test('return of greeting should be a string', ()=>{
        expect(typeof greeting('Gavin')).toBe('string')
    })
})

describe('Math functions', ()=>{
    test('add result should be 3', ()=>{
        expect(add(1,2)).toEqual(3)
    })

    test('add result should be 14', ()=>{
        expect(add(5,9)).toEqual(14)
    })

    test('subtract result should be 2', ()=>{
        expect(subtract(5,3)).toBe(2)
    })

    test('multiply result should be 10', ()=>{
        expect(multiply(2,5)).toBe(10)
    })

    test('divide result should be 3', ()=>{
        expect(divide(9,3)).toBe(3)
    })

    test('result should be a number', ()=>{
        expect(typeof divide(9,3)).toBe('number')
    })
})