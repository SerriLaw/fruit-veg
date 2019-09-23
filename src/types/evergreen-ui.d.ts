declare module 'evergreen-ui' {
  interface SelectMenuOption {
    label: string;
    value: string | number;
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
}
