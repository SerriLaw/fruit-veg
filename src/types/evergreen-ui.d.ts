declare module 'evergreen-ui' {
  interface SelectMenuOption {
    label: string;
    value: string | number;
  }

  interface TextProps {
    size?: number;
  }

  export interface SelectMenuProps {
    selected: string;
    hasTitle: boolean;
    onSelect: (option: SelectMenuOption) => any;
    options?: SelectMenuOption[];
    closeOnSelect?: boolean;
  }
  export class SelectMenu extends React.PureComponent<SelectMenuProps> {}

  export interface IconProps {
    icon: string;
    size?: number;
    title?: string;
    color?: string;
    style?: any;
  }
  export class Icon extends React.PureComponent<IconProps> {}

  interface ButtonProps {
    intent?: 'none' | 'success' | 'danger' | 'warning';
    appearance?: 'primary' | 'minimal';
    iconBefore?: string;
    iconAfter?: string;
    disabled?: boolean;
    className?: string;
    height?: number;
    paddingBottom?: number;
    paddingTop?: number;
    onClick?: (...args: any) => void;
  }
  export class Button extends React.PureComponent<ButtonProps> {}
  export class Heading extends React.PureComponent<TextProps> {}
  export class Paragraph extends React.PureComponent<any> {}
  export class Pane extends React.PureComponent<any> {}
}
