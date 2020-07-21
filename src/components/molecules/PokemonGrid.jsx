import React from 'react'
import {makeStyles} from '@material-ui/styles'
import Pokemon  from  '../atoms/Pokemon'
const useStyles = makeStyles({

    grid:{
        margin: 'auto',
        padding: '.5rem 1rem',
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-evenly',
        backgroundColor: 'lightBlue',
        width: '500px',
        
    }
})



export default function PokemonGrid(props){

    const classes = useStyles()

    return(
        <div className={classes.grid}>
            {props.data.map( pokemon =>pokemon 
            )}
        </div>
    )
}