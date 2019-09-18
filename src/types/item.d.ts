import { Season } from '../lib/enum';

export interface Item {
  name: string;
  type: 'fruit' | 'vegetable';
  seasons: Season[];
  months: string[];
}
