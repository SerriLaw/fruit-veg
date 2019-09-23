import { Season } from './enum';
import { Item } from '../types/item';

export function byMonth(items: Item[], month: string): Item[] {
  return items.filter(x => x.months.includes(month));
}

export function bySeason(items: Item[], season: Season): Item[] {
  return items.filter(x => x.seasons.includes(season));
}

export function byType(items: Item[], type: string): Item[] {
  return items.filter(x => x.type === type);
}
