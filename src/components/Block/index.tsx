import React from 'react';
import { Pane } from 'evergreen-ui';

interface Props {
  children?: any;
  [x: string]: any;
}

export default (props: Props) => {
  const { children, ...styling } = props;
  return <Pane {...styling}>{children}</Pane>;
};
