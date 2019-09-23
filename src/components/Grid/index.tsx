import React from 'react';
import { sortBy } from 'lodash';

import { Item } from '../../types/item';
import CopyText from '../Text/Copy';
import { byMonth } from '../../lib/filters';

interface Props {
  items: Item[];
  month: string;
}

export default class Grid extends React.PureComponent<Props> {
  render() {
    const items = sortBy(
      byMonth(this.props.items, this.props.month),
      x => x.name
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
