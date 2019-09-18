import React from 'react';

import seasonalData from './lib/parser';

export default class App extends React.Component {
  async componentDidMount() {
    console.log(await seasonalData());
  }
  render() {
    return <p>Hello</p>;
  }
}
