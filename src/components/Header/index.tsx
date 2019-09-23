import React from 'react';

import MonthList from './MonthList';

export default class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>What's in season?</h1>
        <MonthList />
      </div>
    );
  }
}
