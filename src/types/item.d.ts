import { Season } from '../lib/enum';

export interface RawItem {
  name: string;
  type: string;
  season: string;
  month: string;
}

export interface Item {
  name: string;
  type: 'fruit' | 'vegetable';
  seasons: Season[];
  months: string[];
}
