import React from 'react';
import Entry from '../components/organisms/Entry'
import Pill from '../components/atoms/Pill'
import pikachu from '../pikachu.json'

const TYPES = []
pikachu.types.map( type => TYPES.push({type:type.type.name,
name: type.type.name}))
const props = {
    id: pikachu.id,
    name: pikachu.name,
    description: 'lorem ipsum',
    height: pikachu.height,
    weight: pikachu.weight,
    url: pikachu.sprites.front_default,
    types: TYPES
}

export const entry = () => 

<Entry {...props}/>;



export default{
    component: entry,
    title: 'Organisms|Entry'
}