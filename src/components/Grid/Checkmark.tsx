import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

export default (props: { selected: boolean }) => {
  return (
    <FontAwesomeIcon
      icon={props.selected ? faCheckSquare : faSquare}
      color={props.selected ? '#1070CA' : 'lightGray'}
    />
  );
};
