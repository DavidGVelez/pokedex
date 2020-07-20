import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    row:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#eaeaea',
        padding: '1.5rem',
        width: '120px'
    },
    imgRow: {
       alignSelf: 'center'
    }
})

export default function Pokemon(props){

const classes = useStyles()

return (
    <div className={classes.row}>
        <img className={classes.imgRow} src={props.url} alt={props.name}/>   
    </div>
)
} 