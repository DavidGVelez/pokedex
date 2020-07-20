import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    button: {
     backgroundColor: 'white',
     border: 'none'
    }
})


export default function RegionButton({logo, region, handleClickRegion}){

    const classes = useStyles()

    return(
    <button className={classes.button} onClick={handleClickRegion}>{region}</button>
    )
}