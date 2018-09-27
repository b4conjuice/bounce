import React, { Component } from 'react';
import 'babel-polyfill';

import Bounce, { getBounce } from './Bounce';
import Time from './Time';
import { callApi } from '../utils/helpers';
import '../reset.css';
import { Wrapper } from './App.styles';

export default class App extends Component {
  state = {
    start: '8:00',
    startLunch: '12:00',
    endLunch: '12:30',
  };

  componentWillMount() {
    callApi('bounce')
      .then(res => {
        const [start, startLunch, endLunch] = res.times;
        console.log({ start, startLunch, endLunch });
        this.setState({
          start,
          startLunch,
          endLunch,
        });
      })
      .catch(err => console.log(`error: ${err}`));
  }

  handleChange = e => {
    const { name, value } = e.target;
    const isValidTime = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(value);
    if (isValidTime) {
      if (name === 'start')
        this.setState({
          start: value,
        });
      else if (name === 'startLunch')
        this.setState({
          startLunch: value,
        });
      else if (name === 'endLunch')
        this.setState({
          endLunch: value,
        });
    }
  };

  render() {
    const { start, startLunch, endLunch } = this.state;
    const bounce = getBounce(start, startLunch, endLunch).T;
    return (
      <Wrapper className="app">
        <Bounce bounce={bounce} />
        <Time name="start" time={start} placeholder="start" onChange={this.handleChange} />
        <Time name="startLunch" time={startLunch} placeholder="start lunch" onChange={this.handleChange} />
        <Time name="endLunch" time={endLunch} placeholder="end lunch" onChange={this.handleChange} />
      </Wrapper>
    );
  }
}
