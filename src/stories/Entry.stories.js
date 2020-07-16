import React from 'react';
import Entry from '../components/Entry'
const props = {
    url: "https://picsum.photos/200/300",
    alt: 'yoda',
    data: 'Yoda'
}

export const entry = () => 

<Entry {...props}/>;



export default{
    component: entry,
    title: 'Entry'
}