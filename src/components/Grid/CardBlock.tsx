import React from 'react';

import Block, { BlockWithTheme } from '../Block';
import Copy from '../Text/Copy';
import { Item } from '../../types/item';
import { IconWithTheme } from './CardIcon';
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
        justifyContent="space-between"
        hoverElevation={1}
        onClick={this.handleClick}
        themeKey={selected ? 'palette.blue.light' : 'palette.blue.lightest'}
      >
        <Block
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignSelf="flex-start"
          padding={7}
          width="100%"
        >
          <Checkmark selected={selected} />
          <IconWithTheme
            type={this.props.item.type}
            themeKey={
              selected
                ? this.props.item.type === 'fruit'
                  ? 'palette.green.base'
                  : 'palette.red.base'
                : 'palette.neutral.base'
            }
            foregroundColor
          />
        </Block>

        <Block
          display="flex"
          width="100%"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <Copy text={this.props.item.name} align="center" />
        </Block>
      </BlockWithTheme>
    );
  }
}
