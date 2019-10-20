import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import Copy from '../Text/Copy';
import Block from '../Block';

export default (props: { checked: boolean; text: string }) => {
  return (
    <Block
      display="flex"
      flexDirection="row"
      alignItems="center"
      marginLeft={5}
      marginRight={5}
    >
      <FontAwesomeIcon
        icon={props.checked ? faCheckSquare : faSquare}
        color={props.checked ? '#1070CA' : 'lightGray'}
        style={{ marginRight: 4 }}
      />
      <Copy text={props.text} size={400} />
    </Block>
  );
};
