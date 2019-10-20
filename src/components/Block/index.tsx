import React from 'react';
import { Pane } from 'evergreen-ui';

import withTheme from '../../HOCs/themed';

interface Props {
  children?: any;
  [x: string]: any;
}

interface BlockWithThemeProps extends Props {
  themeKey: string;
}

export default class Block extends React.Component<Props> {
  render() {
    const { children, ...styling } = this.props;
    return <Pane {...styling}>{children}</Pane>;
  }
}

export const BlockWithTheme = (props: BlockWithThemeProps) =>
  withTheme(Block, props);
