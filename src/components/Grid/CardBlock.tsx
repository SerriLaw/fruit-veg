import React from 'react';
import { GiCarrot, GiShinyApple } from 'react-icons/gi';

import Block from '../Block';
import Copy from '../Text/Copy';
import { Item } from '../../types/item';

interface Props {
  item: Item;
  onClick: (i: Item) => void;
}

export const Icon = ({ a }: { a: string }) => {
  return a === 'fruit' ? (
    <GiShinyApple color="#009933" size={20} />
  ) : (
    <GiCarrot color="#ff9933" size={20} />
  );
};

export default ({ item, onClick }: Props) => (
  <Block
    background="tint1"
    border="muted"
    borderRadius={5}
    width={120}
    height={120}
    margin={24}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    hoverElevation={1}
    onClick={onClick}
  >
    <Block display="flex">
      <Copy text={item.name} align="center" />
    </Block>
    <Block display="flex" margin={2}>
      <Icon a={item.type} />
    </Block>
  </Block>
);
