import React from 'react';
import Button from '../Button';

interface Props {
  text: string;
  icon: string;
  onClick: () => void;
}

export default (props: Props) => {
  return (
    <Button
      onClick={props.onClick}
      iconBefore={props.icon}
      appearance="minimal"
    >
      {props.text}
    </Button>
  );
};
