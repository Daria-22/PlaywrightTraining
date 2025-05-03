

const { test, expect } = require('@playwright/test');

test('Check that 2+2 == 4', () => {
    expect(2+2, "Calculated correctly").toEqual(4);
    expect(2+2).toBeGreaterThan(0);
});

test('The string contains `Abc`', () => {
    expect("Test"+"Abc").toContain('Abc');
    expect(typeof ("Test"+"Abc")).toBe('string');
});

test('Check that array length (length)  == 3', () => {
    expect([1,2,3]).toHaveLength(3);
    expect(typeof([1,2,3])).toBe('object');
});

// there can be more than 1 expect in a test
// when 1 test fails, other still can run
// 
