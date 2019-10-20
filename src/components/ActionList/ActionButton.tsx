import React from 'react';
import Button from '../Button';

interface Props {
  text: string;
  icon: string;
  intent?: 'none' | 'success' | 'danger' | 'warning';
  onClick: () => void;
}

export default (props: Props) => {
  return (
    <Button
      onClick={props.onClick}
      iconBefore={props.icon}
      appearance="minimal"
      intent={props.intent || 'none'}
    >
      {props.text}
    </Button>
  );
};
