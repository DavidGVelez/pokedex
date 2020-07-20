import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    container:{
        display: 'flex'
    }
})


export default function Types(props){
    // console.log('props',props)
    // console.log(props.data)
    console.log(props)
    const classes = useStyles();
    
    return(
        <div className={classes.container}>
        {props.types.map(type => type)}
        
        </div>
    )
    


}