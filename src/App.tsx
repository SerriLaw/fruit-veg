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
  items: Item[];
}

export default class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      month: '',
      season: Season.Summer,
      selectedItems: [],
      items: getData()
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

  handleHideItems = () => {
    const newItems = this.state.items.filter(
      x => !this.state.selectedItems.includes(x)
    );
    this.setState({ items: newItems, selectedItems: [] });
  };

  handleRestoreItems = () => {
    this.setState({ items: getData(), selectedItems: [] });
  };

  render() {
    const { selectedItems, items } = this.state;
    return (
      <div>
        <Header
          onMonthChange={this.handleMonthChange}
          season={this.state.season}
        />

        <ActionList
          items={items}
          selectedItemsCount={selectedItems.length}
          onHideItems={this.handleHideItems}
          onRestoreItems={this.handleRestoreItems}
        />

        <Grid
          items={this.state.items}
          month={this.state.month}
          onItemClick={this.handleItemSelect}
        />
      </div>
    );
  }
}
