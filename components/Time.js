import React from 'react';
import { string, func } from 'prop-types';

import { Input } from './App.styles';

const Time = ({ name, onChange, time, placeholder }) => (
  <Input name={name} onChange={onChange} value={time} placeholder={placeholder} />
);

Time.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  time: string.isRequired,
  placeholder: string.isRequired,
};

export default Time;
