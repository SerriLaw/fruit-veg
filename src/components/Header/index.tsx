import React from 'react';
import { startCase } from 'lodash';

import MonthList from './MonthList';
import Heading from '../Text/Heading';
import { Season } from '../../lib/enum';

interface Props {
  onMonthChange: (month: string) => void;
  season: Season;
}

export default class Header extends React.PureComponent<Props> {
  render() {
    const season = startCase(this.props.season);
    return (
      <div>
        <Heading size={900} text="What's in Season?" />
        <Heading size={600} text={season} />
        <MonthList onMonthChange={this.props.onMonthChange} />
      </div>
    );
  }
}
