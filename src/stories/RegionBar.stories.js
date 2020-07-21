import React from 'react'
import {storiesOf} from '@storybook/react'
import RegionBar from '../components/molecules/RegionBar'


const props ={
    regionList: [{
        region: 'kanto',
        handleClickRegion: () => console.log('kanto')
    },
    {
        region: 'jhotto',
        handleClickRegion: () => console.log('jhotto')
    },
    {
        region: 'hoenn',
        handleClickRegion: () => console.log('hoenn')
    },
    {
        region: 'teselia',
        handleClickRegion: () => console.log('teselia')
    },
    {
        region: 'kalos',
        handleClickRegion: () => console.log('kalos')
    },
    {
        region: 'alola',
        handleClickRegion: () => console.log('alola')
    },
    {
        region: 'galar',
        handleClickRegion: () => console.log('galar')
    }]
}


storiesOf('Molecules|RegionBar', module)
  .add('default', () => <RegionBar {...props}/>)
;
