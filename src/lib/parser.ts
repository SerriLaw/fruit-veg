import { groupBy, map, uniq } from 'lodash';

import { Item } from '../types/item';
import data from '../data/fruit-and-veg.json';

export default function parseData() {
  return group(
    data.map(x => ({
      type: x.type,
      name: x.name,
      months: [x.month],
      seasons: [x.season]
    }))
  );
}

function group(data: any[]): Item[] {
  return map(groupBy(data, z => z.name), group => {
    return group.reduce((i, y) => ({
      name: i.name,
      type: i.type,
      months: [...i.months, ...y.months],
      seasons: uniq([...i.seasons, ...y.seasons])
    }));
  });
}
