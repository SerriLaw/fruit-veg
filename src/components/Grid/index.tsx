import React from 'react';

import { Item } from '../../types/item';
import CopyText from '../Text/Copy';

interface Props {
  items: Item[];
  month: string;
}

export default class Grid extends React.PureComponent<Props> {
  render() {
    const items = this.props.items.filter(x =>
      x.months.includes(this.props.month)
    );

    return (
      <div>
        {items.map(i => (
          <CopyText key={i.name} text={i.name} />
        ))}
      </div>
    );
  }
}
