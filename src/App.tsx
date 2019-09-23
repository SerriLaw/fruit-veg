import React from 'react';

import getData from './lib/parser';
import getSeason from './lib/seasons';
import Header from './components/Header';
import Grid from './components/Grid';
import { Item } from './types/item';
import { Season } from './lib/enum';

interface State {
  month: string;
  season: Season;
}

export default class App extends React.Component<{}, State> {
  data: Item[];
  constructor(props: any) {
    super(props);
    this.data = getData();
    this.state = {
      month: '',
      season: Season.Summer
    };
  }

  handleMonthChange = (month: string) => {
    const season = getSeason(month);
    this.setState({ month, season: season || Season.Summer });
  };

  render() {
    return (
      <div>
        <Header
          onMonthChange={this.handleMonthChange}
          season={this.state.season}
        />

        <Grid items={this.data} month={this.state.month} />
      </div>
    );
  }
}
