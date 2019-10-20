import React from 'react';

import { Item } from '../../types/item';
import ActionButton from './ActionButton';
import { pluralise } from '../../lib/strings';

interface Props {
  visible: boolean;
  items: Item[];
  onHideItems: () => void;
}

export default class ActionList extends React.Component<Props> {
  handleHideItems = () => {
    this.props.onHideItems();
  };

  render() {
    const { items, visible } = this.props;
    return (
      <div style={style.container}>
        {visible && (
          <ActionButton
            text={`Hide ${pluralise('item', items.length)}`}
            icon="eye-off"
            onClick={this.handleHideItems}
          />
        )}
      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    height: 40
  }
};
