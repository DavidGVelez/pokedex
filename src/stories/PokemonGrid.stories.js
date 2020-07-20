import React from 'react'
import PokemonGrid from '../components/molecules/PokemonGrid'
import Pokemon  from  '../components/atoms/Pokemon'
import pikachu from '../pikachu.json'

const data = [
<Pokemon url={pikachu.sprites.front_default} />,
<Pokemon url={pikachu.sprites.front_default} />,
<Pokemon url={pikachu.sprites.front_default} />,
<Pokemon url={pikachu.sprites.front_default} />,
<Pokemon url={pikachu.sprites.front_default} />,
<Pokemon url={pikachu.sprites.front_default} />,

]


    

export const pokemonGrid = () => <PokemonGrid {...{data}}/>;


export default {

    component: pokemonGrid,
    title: 'Molecules|PokemonGrid'

}
