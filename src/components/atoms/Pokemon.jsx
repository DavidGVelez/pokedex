import React from 'react'
import {makeStyles} from '@material-ui/styles'
import { theme } from '../../theme'

const useStyles = makeStyles({
    row:{
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
        margin: '.5rem',
        width: '120px',
        textAlign: 'center'
    },
})

export default function Pokemon({name, url}){

const classes = useStyles()

return (
    <div className={classes.row}>
        <img src={url} alt={name}/>   
    </div>
)
} 