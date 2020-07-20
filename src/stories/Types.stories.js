import React from 'react';
import Types from '../components/molecules/Types'
import Pill from '../components/atoms/Pill'
import pikachu from '../pikachu.json';
import {storiesOf} from '@storybook/react'

const TYPES = []
pikachu.types.map( type => TYPES.push(type.type.name))
 

const props ={
    types: TYPES
}

storiesOf('Molecules|Types', module)
.add('sample', () =><Types {...props}/>)
