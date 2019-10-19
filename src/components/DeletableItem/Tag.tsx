import React from 'react';
import Button from '../Button';

interface Props {
  text: string;
  onClick: () => void;
}

export default (props: Props) => {
  return (
    <Button onClick={props.onClick} iconAfter="cross" appearance="minimal">
      {props.text}
    </Button>
  );
};
