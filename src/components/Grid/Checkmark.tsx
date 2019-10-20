import React from 'react';
import { Icon } from 'evergreen-ui';

export default (props: { selected: boolean }) => {
  return (
    <Icon
      icon={props.selected ? 'tick-circle' : 'circle'}
      color={props.selected ? 'selected' : 'muted'}
      style={{ opacity: props.selected ? 1 : 0.5 }}
    />
  );
};
