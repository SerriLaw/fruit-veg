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
  export class Button extends React.PureComponent<any> {}
  export class Heading extends React.PureComponent<TextProps> {}
  export class Paragraph extends React.PureComponent<any> {}
  export class Pane extends React.PureComponent<any> {}
}
