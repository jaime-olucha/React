// POR LO MENOS DEBE TENER UNA PRUEBA

import { expect, test, describe } from 'vitest'
import { add, substract, multiply } from './math.helper';

// Agrupador de pruebas
describe('add', () => {
    test('should add two positive numbers', () => {

        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b)

        // ! 3. Assert
        expect(result).toBe(a + b);
    });
});

describe('substract', () => {
    test('should substract two positive numbers', () => {

        const a = 1;
        const b = 2;

        const result = substract(a, b)

        expect(result).toBe(a - b);
    });

    test('should substract two negative numbers', () => {

        const a = -5;
        const b = -10;

        const result = substract(a, b)

        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('sholuld multiply two positive numbers', () => {

        const a = 5;
        const b = 10;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    })

    test('sholuld multiply 0', () => {

        const a = 5;
        const b = 0;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    })
})