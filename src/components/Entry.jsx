import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({

    card:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        width: '15rem',
        height: '7rem',
        backgroundColor: '#fafafa'
    },

    image: {
        width: '3rem',
        height: '3rem',
        backgroundColor: '#eeeeee'
    },

    info: {
        display: 'flex',
        alignItems: 'center',
        width: '10rem',
        height: '3rem',
        backgroundColor: '#f3f3f3'
    },
    portrait:{
        width: '100%',
        height:'100%',
        objectFit: 'cover'
    },
    text:{
        padding: '1rem',
        fontFamily: 'Roboto',
        color: '#292929'
    }

}
)


export default function Entry(props){
    const classes = useStyles();
    
    return(
        <div className={classes.card}>
                <div className={classes.image}>
                    <img className={classes.portrait} src={`${props.url}`} alt={props.alt}/>
                </div>
                <div className={classes.info}>  
                    <span className={classes.text}>#1 PIKACHU</span>
                </div>
        </div>
    )
    
}

