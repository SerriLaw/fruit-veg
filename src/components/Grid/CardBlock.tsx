import React from 'react';
import { GiCarrot, GiShinyApple } from 'react-icons/gi';

import Block from '../Block';
import Copy from '../Text/Copy';
import { Item } from '../../types/item';
import CardItem from './CardIcon';

interface Props {
  item: Item;
  onClick: (i: Item) => void;
}

export default class CardBlock extends React.PureComponent<Props> {
  handleClick = () => {
    this.props.onClick(this.props.item);
  };
  render() {
    return (
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
        onClick={this.handleClick}
      >
        <Block display="flex">
          <Copy text={this.props.item.name} align="center" />
        </Block>
        <Block display="flex" margin={2}>
          <CardItem type={this.props.item.type} />
        </Block>
      </Block>
    );
  }
}
