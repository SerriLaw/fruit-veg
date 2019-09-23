import React from 'react';
import { SelectMenu, Icon } from 'evergreen-ui';
import { startCase } from 'lodash';

import { months } from '../../data/months';

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
    this.props.onMonthChange(this.currentMonth);
  }

  handleSelect = (e: any) => {
    this.setState({ selectedMonth: e.value });
    this.props.onMonthChange(e.value);
  };

  render() {
    return (
      <SelectMenu
        hasTitle={false}
        options={months.map(m => ({ label: startCase(m), value: m }))}
        selected={this.state.selectedMonth}
        onSelect={this.handleSelect}
        closeOnSelect={true}
      >
        <div>
          {startCase(this.state.selectedMonth)} <Icon icon="chevron-down" />
        </div>
      </SelectMenu>
    );
  }
}
