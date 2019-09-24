import React from 'react';
import { GiCarrot, GiShinyApple } from 'react-icons/gi';

import Block from '../Block';
import Copy from '../Text/Copy';
import { Item } from '../../types/item';

interface Props {
  item: Item;
}

export const Icon = ({ a }: { a: string }) => {
  return a === 'fruit' ? (
    <GiShinyApple color="#009933" size={20} />
  ) : (
    <GiCarrot color="#ff9933" size={20} />
  );
};

export default ({ item }: Props) => (
  <Block
    background="tint1"
    border="muted"
    width={120}
    height={120}
    margin={24}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    hoverElevation={1}
  >
    <Block display="flex">
      <Copy text={item.name} align="center" />
    </Block>
    <Block display="flex" margin={2}>
      <Icon a={item.type} />
    </Block>
  </Block>
);
