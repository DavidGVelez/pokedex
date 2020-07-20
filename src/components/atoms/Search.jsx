import React, {useState} from 'react';

export default function Search(){
    const [value, setValue] = useState("")

    return(
        <input onChange={() => setValue(this.event.target.value)} value={value} type='search'/>
    )
}