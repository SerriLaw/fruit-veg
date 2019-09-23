import React from 'react';
import { Heading } from 'evergreen-ui';

interface Props {
  text: string;
  size?: number;
}

export default ({ text, size = 500 }: Props) => (
  <Heading size={size}>{text}</Heading>
);
