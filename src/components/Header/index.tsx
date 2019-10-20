import React from 'react';

import Block from '../Block';
import MonthChanger from './MonthChanger';
import SeasonDisplay from './SeasonDisplay';
import Heading from '../Text/Heading';
import { Season } from '../../lib/enum';

interface Props {
  onMonthChange: (month: string) => void;
  season: Season;
}

export default class Header extends React.PureComponent<Props> {
  render() {
    return (
      <Block
        flex={1}
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        background="#DDEBF7"
        padding={10}
      >
        <Heading size={900} text="What's in Season?" />
        <Block
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <SeasonDisplay season={this.props.season} />
          <MonthChanger onMonthChange={this.props.onMonthChange} />
        </Block>
      </Block>
    );
  }
}
