import React from 'react';

import { Item } from '../../types/item';
import DeletableItem from '../DeletableItem';

interface Props {
  items: Item[];
  onClick: (i: Item) => void;
}

export default class ItemList extends React.Component<Props> {
  handleClick = (item: Item) => {
    this.props.onClick(item);
  };

  render() {
    return this.props.items.map((i: Item) => (
      <DeletableItem
        item={i}
        onDelete={() => this.handleClick(i)}
        key={i.name}
      />
    ));
  }
}
