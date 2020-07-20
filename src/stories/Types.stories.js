import React from 'react';
import Types from '../components/molecules/Types'
import Pill from '../components/atoms/Pill'
import pikachu from '../pikachu.json';
import {storiesOf} from '@storybook/react'


 
const data = pikachu.types.map( type => type.type.name)
console.log('data',data)
const pills = [<Pill type={'dark'}/>, <Pill type={'fighting'}/>]

storiesOf('Molecules|Types', module)
.add('sample', () =><Types types={pills}/>)
