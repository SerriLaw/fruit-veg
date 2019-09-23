import React from 'react';
import { Paragraph } from 'evergreen-ui';

interface Props {
  text: string;
  size?: number;
}

export default ({ text, size = 400 }: Props) => (
  <Paragraph size={size}>{text}</Paragraph>
);
