import { pluralise } from './strings';

describe('Strings', () => {
  describe('pluralise()', () => {
    it('should return correct string for multiple counts', () => {
      expect(pluralise('foo', 2)).toBe('2 foos');
      expect(pluralise('bar', 50)).toBe('50 bars');
      expect(pluralise('beep', -5)).toBe('-5 beeps');
      expect(pluralise('dog', 0)).toBe('0 dogs');
    });

    it('should return correct string for singular counts', () => {
      expect(pluralise('foo', 1)).toBe('1 foo');
      expect(pluralise('bar', -1)).toBe('-1 bar');
    });
  });
});
