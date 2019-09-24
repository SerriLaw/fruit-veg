import React from 'react';
import { startCase } from 'lodash';

import Block from '../Block';
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
      <Block
        flex={1}
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        background="tealTint"
        padding={10}
      >
        <Heading size={900} text="What's in Season?" />
        <Block
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading size={600} text={season} />
          <MonthList onMonthChange={this.props.onMonthChange} />
        </Block>
      </Block>
    );
  }
}
