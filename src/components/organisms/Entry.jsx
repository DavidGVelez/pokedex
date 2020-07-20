import React from 'react'
import {makeStyles} from '@material-ui/styles'
import Types from '../molecules/Types'
const useStyles = makeStyles({

    card:{
        padding: '2rem',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'space-evenly',
        alignItems: 'center',
        width: '60rem',
        height: '30rem',
        backgroundColor: '#f3f3f3'
    },
    topWrapper:{
        height: '14rem',
        padding: '2rem 0',
        width: '100%',
        margin: 'auto',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    sprite:{
        width: '100%',
        height: '100%'
    },
    portrait:{
        height:'100%',
        width: '14rem',
    },
    topInfo:{
        display: 'flex',
        width: '100%',
        height: '3rem',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    types:{
        display: 'inherit',
        height: '3rem',
        alignItems: 'center'
    },
    bottomInfo:{
        width: '30%',
        height: '6rem',
    },
    infoWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '40rem',
        backgroundColor: '#ffffff'
    },
    
    text:{
        padding: '1rem',
        fontFamily: 'Roboto',
        color: '#292929'
    },
    description:{
        height: '10rem',
        width: '100%',
        backgroundColor: '#ffffff'
    },
    name:{
        fontSize: '1.5rem',
        textTransform: 'uppercase'
    }
}
)


export default function Entry(props){
    const classes = useStyles();
    console.log(props.types)
    return(
        // <div className={classes.card}>
        //         <div className={classes.image}>
        //             <img className={classes.portrait} src={`${props.url}`} alt={props.alt}/>
        //         </div>
        //         <div className={classes.info}>  
        //             <span className={classes.text}>#1 PIKACHU</span>
        //         </div>
        // </div>
        <div className={classes.card}>
            <div className={classes.topWrapper}>
                <div className={classes.portrait}>
                    <img className={classes.sprite} src={`${props.url}`} alt={props.alt}/>
                </div>
                <div className={classes.infoWrapper}>
                    <div className={classes.topInfo}>
                        <div className={classes.name}>
                            <span className={classes.text}>{`${props.id} - ${props.name}`}</span>
                        </div>
                    </div>
                    <div className={classes.types}>
                        {<Types types={props.types}/>}
                    </div>
                    <div className={classes.bottomInfo}>
                        <div className={classes.text}>
                                {`Weight ${props.weight/10} kg`}
                        </div>
                        <div className={classes.text}>
                        {`Height ${props.height/10} cm`}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.description}>
                <p className={classes.text}>{props.description}</p>
            </div>
        </div>
    )
    
}

