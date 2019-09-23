import getSeason from './seasons';
import { Season } from './enum';

describe('Seasons', () => {
  it('should get season according to month', () => {
    expect(getSeason('january')).toBe(Season.Summer);
    expect(getSeason('march')).toBe(Season.Autumn);
    expect(getSeason('july')).toBe(Season.Winter);
    expect(getSeason('september')).toBe(Season.Spring);
    expect(getSeason('foobar')).toBe(null);
  });
});
