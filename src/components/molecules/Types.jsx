import React from 'react'
import Pill from '../atoms/Pill'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    container:{
        display: 'flex'
    }
})


export default function Types({
    types
}){
    const classes = useStyles();
    return(
        <div className={classes.container}>
        {types.map(type => <Pill type={type}/>)}
        
        </div>
    )
    


}