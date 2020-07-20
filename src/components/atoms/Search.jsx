import React, {useState} from 'react';

export default function Search(){
    const [value, setValue] = useState("")
    return(
        <input type='text' onChange={(event) => setValue(event.target.value)} value={value} type='search'/>
    )
}