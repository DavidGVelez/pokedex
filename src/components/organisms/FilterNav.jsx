import React from 'react'
import RegionBar from '../molecules/RegionBar'
import Search from '../atoms/Search'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    filterWrapper:{
        backgroundColor: '#f4f9ff',
        padding: '.5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&> input':{
            align: 'center'
        }
    }
})


export default function FilterNav({
    regionList
}){

    const classes = useStyles()

return(
    <div className={classes.filterWrapper}>
        <RegionBar {...{regionList}}/>
        <Search />
    </div>
)



}