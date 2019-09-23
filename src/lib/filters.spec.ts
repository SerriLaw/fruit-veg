import { byMonth, bySeason, byType } from './filters';
import { Season } from './enum';
import { Item } from '../types/item';

const mockItems: Item[] = [
  {
    name: 'apple',
    type: 'fruit',
    months: ['april', 'may'],
    seasons: [Season.Autumn]
  },
  {
    name: 'banana',
    type: 'fruit',
    months: ['january', 'march'],
    seasons: [Season.Autumn, Season.Summer]
  },
  {
    name: 'carrot',
    type: 'vegetable',
    months: ['december', 'november'],
    seasons: [Season.Autumn, Season.Spring]
  }
];

describe('Filters', () => {
  it('should filter data for given month', () => {
    expect(byMonth(mockItems, 'march')).toMatchSnapshot();
    expect(byMonth(mockItems, 'fake')).toMatchSnapshot();
  });

  it('should filter data for given season', () => {
    expect(bySeason(mockItems, Season.Summer)).toMatchSnapshot();
    expect(bySeason(mockItems, Season.Spring)).toMatchSnapshot();
  });

  it('should filter data for given type', () => {
    expect(byType(mockItems, 'fruit')).toMatchSnapshot();
    expect(byType(mockItems, 'vegetable')).toMatchSnapshot();
  });
});
