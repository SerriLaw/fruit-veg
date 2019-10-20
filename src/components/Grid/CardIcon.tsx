import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faCarrot } from '@fortawesome/free-solid-svg-icons';

import withTheme from '../../HOCs/themed';

interface Props {
  type: string;
}

interface PropsTheme extends Props {
  themeKey: string;
  foregroundColor?: boolean;
}

export default function Icon(props: any) {
  console.log(props);
  return props.type === 'fruit' ? (
    <FontAwesomeIcon icon={faAppleAlt} color={props.color || ''} />
  ) : (
    <FontAwesomeIcon icon={faCarrot} color={props.color || ''} />
  );
}

export const IconWithTheme = (props: PropsTheme) => withTheme(Icon, props);
