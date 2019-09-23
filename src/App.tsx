import React from 'react';

import getData from './lib/parser';
import Header from './components/Header';

export default class App extends React.Component {
  async componentDidMount() {
    console.log(getData());
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
