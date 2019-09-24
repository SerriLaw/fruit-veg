import React from 'react';
import { SelectMenu, Heading, Button } from 'evergreen-ui';
import { startCase } from 'lodash';

import { months } from '../../data/months';
import Block from '../Block';

interface Props {
  onMonthChange: (month: string) => void;
}
interface State {
  selectedMonth: string;
}

export default class MonthList extends React.PureComponent<Props, State> {
  currentMonth: string;
  constructor(props: Props) {
    super(props);
    const i = new Date().getMonth();
    this.currentMonth = months[i];
    this.state = {
      selectedMonth: this.currentMonth
    };
  }

  componentDidMount() {
    this.handleReset();
  }

  handleSelect = (e: any) => {
    this.setState({ selectedMonth: e.value });
    this.props.onMonthChange(e.value);
  };

  handleReset = () => {
    this.setState({ selectedMonth: this.currentMonth });
    this.props.onMonthChange(this.currentMonth);
  };

  render() {
    return (
      <Block display="flex" width={230} justifyContent="flex-end">
        <SelectMenu
          hasTitle={false}
          options={months.map(m => ({ label: startCase(m), value: m }))}
          selected={this.state.selectedMonth}
          onSelect={this.handleSelect}
          closeOnSelect={true}
        >
          <Button iconAfter="chevron-down" appearance="minimal">
            {startCase(this.state.selectedMonth)}
          </Button>
        </SelectMenu>

        <Button
          appearance="minimal"
          intent="warning"
          iconBefore="history"
          onClick={this.handleReset}
        >
          Reset
        </Button>
      </Block>
    );
  }
}
