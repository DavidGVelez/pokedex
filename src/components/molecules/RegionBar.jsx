import React from 'react'
import RegionButton from '../atoms/RegionButton'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    regionList: {
        padding: 0,
        listStyleType:'none',
        display: 'flex',
        '&> li > button':{
           textTransform: 'capitalize',
           fontSize: '1rem'
        } 
    },
})

export default function RegionBar({regionList}){

const classes = useStyles()

return(
    <ul className={classes.regionList}>
        {regionList.map( item => <li><RegionButton {...item}/></li>)}
    </ul>
)
}