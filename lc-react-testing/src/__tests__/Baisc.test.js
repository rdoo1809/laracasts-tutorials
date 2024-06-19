import { add, subtract, multiply } from '../Math.js';


describe('math tests', () => {

  it('does basic math', () => {
    expect(3 + 2).toBe(5);
    expect(3 * 2).toBe(6);
    expect(Math.sqrt(36)).toBe(6);
  });

  it('does basic math from external file', () => {
    expect(add(3, 2)).toBe(5);
    expect(multiply(3, 2)).toBe(6);
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('string tests', () => {

  it('contains a string', () => {
    const myString = 'This is a string';

    expect(myString).toContain('is a string');
  });
});