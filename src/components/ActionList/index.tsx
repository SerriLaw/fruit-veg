import React from 'react';

import { Item } from '../../types/item';
import ActionButton from './ActionButton';
import { pluralise } from '../../lib/strings';
import Block from '../Block';
import Copy from '../Text/Copy';
import Filter from './Filter';

interface Props {
  items: Item[];
  onHideItems: () => void;
  onRestoreItems: () => void;
  selectedItemsCount: number;
}

export default class ActionList extends React.Component<Props> {
  handleHideItems = () => {
    this.props.onHideItems();
  };

  handleRestoreItems = () => {
    this.props.onRestoreItems();
  };

  render() {
    const { items, selectedItemsCount } = this.props;
    return (
      <Block
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        padding={10}
        background="tealTint"
      >
        <Block display="flex" flexDirection="row">
          <Filter text="Fruit" checked />
          <Filter text="Vegetables" checked />
          <ActionButton
            text="Apply Filters"
            icon="filter-list"
            onClick={this.handleRestoreItems}
            intent="warning"
          />
        </Block>
        <Block>
          <ActionButton
            text={`Hide ${pluralise('Item', selectedItemsCount)}`}
            icon="eye-off"
            onClick={this.handleHideItems}
            intent="warning"
          />
        </Block>
        <Block>
          <ActionButton
            text="Restore"
            icon="reset"
            onClick={this.handleRestoreItems}
            intent="danger"
          />
        </Block>
        <Block
          display="flex"
          flexGrow={1}
          justifyContent="flex-end"
          paddingRight={15}
        >
          <Copy text={`${pluralise('Item', this.props.items.length)}`} />
        </Block>
      </Block>
    );
  }
}
