import React from 'react';
import Entry from '../components/organisms/Entry'
import Pill from '../components/atoms/Pill'
import pikachu from '../pikachu.json'

const props = {
    id: pikachu.id,
    name: pikachu.name,
    description: 'lorem ipsum',
    height: pikachu.height,
    weight: pikachu.weight,
    url: pikachu.sprites.front_default,
    types: [<Pill type={'electric'}/>, <Pill type={'dark'}/>]
}

export const entry = () => 

<Entry {...props}/>;



export default{
    component: entry,
    title: 'Organism|Entry'
}