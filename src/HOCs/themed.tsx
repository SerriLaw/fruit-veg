import React, { useContext } from 'react';
import { ThemeContext } from 'evergreen-ui';
import { get } from 'lodash';

interface Props {
  themeKey: string;
  [x: string]: any;
}

export default (WrappedComponent: any, props: Props) => {
  const { themeKey, ...rest } = props;
  const theme = useContext(ThemeContext);
  const color = get(theme, themeKey, 'white');
  return <WrappedComponent {...rest} backgroundColor={color} />;
};
