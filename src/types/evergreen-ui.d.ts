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
    style?: any;
  }
  export class Button extends React.PureComponent<ButtonProps> {}
  export class Heading extends React.PureComponent<TextProps> {}
  export class Paragraph extends React.PureComponent<any> {}
  export class Pane extends React.PureComponent<any> {}
  export const ThemeContext: any;

  export interface Theme {
    palette: {
      blue: {
        lightest: '#f7f9fd';
        light: '#ddebf7';
        base: '#1070ca';
        dark: '#084b8a';
      };
      green: {
        lightest: '#f1faf5';
        light: '#d4eee2';
        base: '#47b881';
        dark: '#00783e';
      };
      neutral: {
        lightest: '#F9F9FB';
        light: '#E4E7EB';
        base: '#425A70';
        dark: '#234361';
      };
      orange: {
        lightest: '#fdf8f3';
        light: '#fae3cd';
        base: '#d9822b';
        dark: '#95591e';
      };
      purple: {
        lightest: '#f8f7fc';
        light: '#eae7f8';
        base: '#735dd0';
        dark: '#37248f';
      };
      red: {
        lightest: '#fef6f6';
        light: '#fae2e2';
        base: '#ec4c47';
        dark: '#bf0e08';
      };
      teal: {
        lightest: '#f1fbfc';
        light: '#d2eef3';
        base: '#14b5d0';
        dark: '#007489';
      };
      yellow: {
        lightest: '#fef8e7';
        light: '#fbe6a2';
        base: '#f7d154';
        dark: '#7e6514';
      };
    };
  }
}
