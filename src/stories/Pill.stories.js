import React from 'react';
import Pill from '../components/atoms/Pill'
import {storiesOf} from '@storybook/react'


storiesOf('Atoms|Pill', module)
  .add('fire', () => <Pill type='fire' name='fire'/>)
  .add('ice', () => <Pill type='ice' name='fire'/>)
  .add('dark', () => <Pill type='dark' name='dark'/>)
  .add('water', () => <Pill type='water' name='water'/>)
  .add('type', () => <Pill type='efectiveness' name='x2' />)
;
