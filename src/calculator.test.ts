import { add, subtract } from './calculator';

describe('Calculator', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should add a positive and negative number', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('should add zero to a number', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });

    it('should add decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    it('should handle floating point precision', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should subtract two negative numbers', () => {
      expect(subtract(-2, -5)).toBe(3);
    });

    it('should subtract a negative from a positive number', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    it('should subtract a positive from a negative number', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    it('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    it('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    it('should subtract decimal numbers', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
    });

    it('should handle floating point precision', () => {
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
    });
  });
});