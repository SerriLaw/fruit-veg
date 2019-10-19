import { Item } from '../types/item';
import {
  addToSelection,
  removeFromSelection,
  findByName,
  editSelectionList
} from './selectItems';

describe('Selecting Items', () => {
  const mockItem1 = {
    name: 'a-item-1',
    type: 'fruit',
    seasons: ['spring'],
    months: ['november']
  } as Item;
  const mockItem2 = {
    name: 'b-item-2',
    type: 'vegetable',
    seasons: ['winter'],
    months: ['june', 'july']
  } as Item;

  describe('addToSelection()', () => {
    it('should add item to array', () => {
      expect(addToSelection(mockItem1, [])).toEqual([mockItem1]);
      expect(addToSelection(mockItem2, [mockItem1])).toEqual([
        mockItem1,
        mockItem2
      ]);
    });
  });
  describe('removeFromSelection()', () => {
    it('should remove item from array', () => {
      expect(removeFromSelection(mockItem1, [mockItem1, mockItem2])).toEqual([
        mockItem2
      ]);

      expect(removeFromSelection(mockItem2, [mockItem1, mockItem2])).toEqual([
        mockItem1
      ]);
    });

    it('should return original array if item does not exist', () => {
      expect(removeFromSelection(mockItem2, [mockItem1])).toEqual([mockItem1]);
    });
  });

  describe('findInSelection()', () => {
    it('should return item when it exists in selection', () => {
      expect(findByName(mockItem1.name, [mockItem1, mockItem2])).toEqual(
        mockItem1
      );
    });

    it('should return null when item does NOT exist in selection', () => {
      expect(findByName(mockItem1.name, [])).toEqual(null);
    });
  });

  describe('editSelectionList()', () => {
    describe('when given item exists in selection', () => {
      it('should remove item from selection and sort by name', () => {
        expect(editSelectionList(mockItem1, [mockItem1, mockItem2])).toEqual([
          mockItem2
        ]);
      });
    });

    describe('when given item does NOT exist in selection', () => {
      it('should add item to selection and sort by name', () => {
        expect(editSelectionList(mockItem1, [mockItem2])).toEqual([
          mockItem1,
          mockItem2
        ]);
      });
    });
  });
});
