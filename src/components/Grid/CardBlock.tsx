import React from 'react';

import Block from '../Block';
import Copy from '../Text/Copy';

interface Props {
  text: string;
}

export default (props: Props) => (
  <Block
    background="tint1"
    border="muted"
    width={120}
    height={120}
    margin={24}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Copy text={props.text} align="center" />
  </Block>
);
