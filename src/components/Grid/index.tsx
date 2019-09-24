import React from 'react';
import { sortBy } from 'lodash';

import CopyText from '../Text/Copy';
import CardBlock from './CardBlock';
import { Item } from '../../types/item';
import { byMonth } from '../../lib/filters';
import Block from '../Block';

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
      <Block
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        padding={20}
        marginVertical={20}
      >
        {items.map(i => (
          <CardBlock key={i.name} item={i} />
        ))}
      </Block>
    );
  }
}
