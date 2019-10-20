import React from 'react';

import Block, { BlockWithTheme } from '../Block';
import Copy from '../Text/Copy';
import { Item } from '../../types/item';
import CardIcon from './CardIcon';
import Checkmark from './Checkmark';

interface Props {
  item: Item;
  onClick: (i: Item) => void;
}

interface State {
  selected: boolean;
}

export default class CardBlock extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleClick = () => {
    this.setState({ selected: !this.state.selected });
    this.props.onClick(this.props.item);
  };

  render() {
    const { selected } = this.state;
    return (
      <BlockWithTheme
        background={selected ? 'blueTint' : 'tint1'}
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
        themeKey={selected ? 'palette.blue.light' : 'palette.neutral.lightest'}
      >
        <Block display="flex">
          <Checkmark selected={selected} />
        </Block>
        <Block display="flex">
          <Copy text={this.props.item.name} align="center" />
        </Block>
        <Block display="flex" margin={2}>
          <CardIcon type={this.props.item.type} />
        </Block>
      </BlockWithTheme>
    );
  }
}
