import React from 'react';

import { Item } from '../../types/item';
import ActionButton from './ActionButton';
import { pluralise } from '../../lib/strings';

interface Props {
  visible: boolean;
  items: Item[];
}

export default class ActionList extends React.Component<Props> {
  handleHideItems = () => {
    console.log('Hiding Items', this.props.items);
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
