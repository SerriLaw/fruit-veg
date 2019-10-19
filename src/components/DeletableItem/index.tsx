import React from 'react';

import { Item } from '../../types/item';
import Tag from './Tag';

interface Props {
  item: Item;
  onDelete: () => void;
}

export default ({ item, onDelete }: Props) => {
  return <Tag text={item.name} onClick={onDelete} />;
};
