import React from 'react';

import { Item } from '../../types/item';

interface Props {
  items: Item[];
}

export default class Grid extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        {this.props.items.map(i => (
          <div>{i.name}</div>
        ))}
      </div>
    );
  }
}
