import React from 'react';

import getData from './lib/parser';
import getSeason from './lib/seasons';
import Header from './components/Header';
import Grid from './components/Grid';

import ActionList from './components/ActionList';
import { Item } from './types/item';
import { Season } from './lib/enum';
import { editSelectionList, removeFromSelection } from './lib/selectItems';

interface State {
  month: string;
  season: Season;
  selectedItems: Item[];
}

export default class App extends React.Component<{}, State> {
  data: Item[];
  constructor(props: any) {
    super(props);
    this.data = getData();
    this.state = {
      month: '',
      season: Season.Summer,
      selectedItems: []
    };
  }

  handleMonthChange = (month: string) => {
    const season = getSeason(month);
    this.setState({ month, season: season || Season.Summer });
  };

  handleItemSelect = (item: Item) => {
    const selectedItems = editSelectionList(item, this.state.selectedItems);
    this.setState({ selectedItems });
  };

  handleItemDelete = (item: Item) => {
    const selectedItems = removeFromSelection(item, this.state.selectedItems);
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    return (
      <div>
        <Header
          onMonthChange={this.handleMonthChange}
          season={this.state.season}
        />

        {/* <ItemList items={selectedItems} onClick={this.handleItemDelete} /> */}

        <ActionList items={selectedItems} visible={!!selectedItems.length} />

        <Grid
          items={this.data}
          month={this.state.month}
          onItemClick={this.handleItemSelect}
        />
      </div>
    );
  }
}
