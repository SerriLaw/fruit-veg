import React from 'react';
import { Paragraph } from 'evergreen-ui';

interface Props {
  text: string;
  align?: 'center' | 'left' | 'right';
  size?: number;
}

export default ({ text, size = 500, align = 'left' }: Props) => (
  <Paragraph size={size} textAlign={align} margin={2}>
    {text}
  </Paragraph>
);
