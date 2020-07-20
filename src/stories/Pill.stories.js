import React from 'react';
import Pill from '../components/atoms/Pill'
import {storiesOf} from '@storybook/react'


storiesOf('Atoms|Pill', module)
  .add('fire', () => <Pill type='fire'/>)
  .add('ice', () => <Pill type='ice'/>)
  .add('dark', () => <Pill type='dark'/>)
  .add('water', () => <Pill type='water'/>)
;
