import React from 'react'
import RegionButton  from '../components/atoms/RegionButton'
import {storiesOf} from '@storybook/react'

const props = {
    region: 'Jhotto',
    handleClickRegion: () => console.log('jhotto')
}


storiesOf('Atoms|RegionButton', module)
  .add('Kanto', () => <RegionButton {...props}/>)
;



