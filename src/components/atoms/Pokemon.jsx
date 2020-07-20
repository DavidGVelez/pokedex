import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    row:{
        justifyContent: 'center',
        backgroundColor: '#eaeaea',
        margin: '.5rem',
        width: '120px',
        textAlign: 'center'
    },
})

export default function Pokemon(props){

const classes = useStyles()

return (
    <div className={classes.row}>
        <img src={props.url} alt={props.name}/>   
    </div>
)
} 