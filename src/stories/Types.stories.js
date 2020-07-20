import React from 'react';
import Types from '../components/molecules/Types'
import Pill from '../components/atoms/Pill'
import pikachu from '../pikachu.json';
import {storiesOf} from '@storybook/react'


 
// const data = pikachu.types.map( type => type.type.name)
const pills = [<Pill type={'water'}/>, <Pill type={'fire'}/>]

storiesOf('Molecules|Types', module)
.add('sample', () =><Types types={pills}/>)
