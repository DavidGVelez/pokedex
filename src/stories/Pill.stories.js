import React from 'react';
import Pill from '../components/atoms/Pill'

const props = {
    type: 'bug'
}


export const pill = () => 
<Pill {...props}/>;



export default{
    component: pill,
    title: 'Pill'
}