import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    pill:{
        margin: '1rem',
        width: '5rem',
        display: 'inline-flex',
        border:'1px solid black',
    },
    text:{
        fontSize: '.8rem',
        padding: '.5rem',
        textTransform:'uppercase',
        margin: 'auto',
        color: '#ffffff'
    },
    bug:{
        backgroundColor: '#919F24'
    },
    dark:{
        backgroundColor: '#372720'
    },
    dragon:{
        backgroundColor: '#B4A8EB',
    },
    electric:{
        backgroundColor: '#E1A426'
    },
    fairy:{
        backgroundColor: '#EDA3EE'
    },
    fighting:{
        backgroundColor: '#7D311D'
    },
    fire:{
        backgroundColor: '#D63208'
    },
    flying:{
        backgroundColor: '#8598EC'
    },
    ghost:{
        backgroundColor: '#505198'
    },
    grass:{
        backgroundColor: '#71BB36'
    },
    ground:{
        backgroundColor: '#D2B156'
    },
    ice:{
        backgroundColor: '#6FD4F5'
    },
    normal:{
        backgroundColor: '#C6C1BB'
    },
    poison:{
        backgroundColor: '#833F84'
    },
    psychic:{
        backgroundColor: '#E5497E'
    },
    rock:{
        backgroundColor: '#81723E'
    },
    steel:{
        backgroundColor: '#9394A4'
    },
    water:{
        backgroundColor: '#1D72CC'
    },
})



export default function Pill(props){
    const classes = useStyles();
    return(
        <div className={`${classes.pill} ${classes[props.type]}`}>
            <span className={classes.text}>{props.type}</span>
        </div>
    )
}