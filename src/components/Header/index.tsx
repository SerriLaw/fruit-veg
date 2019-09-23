import React from 'react';
import { startCase } from 'lodash';

import MonthList from './MonthList';
import { Season } from '../../lib/enum';

interface Props {
  onMonthChange: (month: string) => void;
  season: Season;
}

export default class Header extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <h1>What's in season?</h1>
        <MonthList onMonthChange={this.props.onMonthChange} />
        <div>{startCase(this.props.season)}</div>
      </div>
    );
  }
}
