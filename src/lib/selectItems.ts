import { Item } from '../types/item';
import { find, findIndex, sortBy } from 'lodash';

export function addToSelection(item: Item, selection: Item[]): Item[] {
  const arr = selection;
  arr.push(item);
  return arr;
}

export function removeFromSelection(item: Item, selection: Item[]): Item[] {
  const arr = selection;
  const match = findIndex(arr, x => x.name === item.name);
  if (match > -1) {
    arr.splice(match, 1);
  }
  return arr;
}

export function findByName(name: string, selection: Item[]): Item | null {
  const match = find(selection, x => x.name === name);
  return match ? match : null;
}

export function editSelectionList(item: Item, selection: Item[]): Item[] {
  const arr = selection;
  const match = findByName(item.name, arr);
  if (match) {
    return sortBy(removeFromSelection(item, arr), x => x.name);
  }
  return sortBy(addToSelection(item, arr), x => x.name);
}
