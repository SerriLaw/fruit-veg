import React from 'react';
import { Button } from 'evergreen-ui';

interface Props {
  children: any;
  onClick?: (...args: any[]) => void;
  intent?: 'none' | 'success' | 'danger' | 'warning';
  appearance?: 'primary' | 'minimal';
  iconBefore?: string;
  iconAfter?: string;
  disabled?: boolean;
}

export default ({ children, onClick, ...rest }: Props) => {
  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};
