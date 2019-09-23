import { transformData } from './parser';

const data = [
  {
    name: 'Apples',
    type: 'fruit',
    season: 'autumn',
    month: 'march'
  },
  {
    name: 'Bananas',
    type: 'fruit',
    season: 'autumn',
    month: 'april'
  },
  {
    name: 'Potatoes',
    type: 'vegetable',
    season: 'spring',
    month: 'september'
  },
  {
    name: 'Bananas',
    type: 'fruit',
    season: 'autumn',
    month: 'march'
  },
  {
    name: 'Potatoes',
    type: 'vegetable',
    season: 'summer',
    month: 'december'
  }
];

describe('Parser', () => {
  it('should transform raw data into Item arrays', () => {
    expect(transformData(data)).toMatchSnapshot();
  });
});
