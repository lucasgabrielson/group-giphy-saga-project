import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Search = () => {
    // const dispatch = useDispatch();

    const [ query, setQuery ] = useState('');

    const handleChange = event => {
        setQuery( event.target.value );
    }

    const getGifs = () => {
        //dispatch( { type: 'SET_ELEMENTS', payload: [] } );
    }

    return (
        <div>
            <input onChange = {handleChange} value = {query} type = 'text' placeholder = 'Type of Gif You Haz To Find'></input>
            <button onClick = {() => getGifs()}>Search 4 Ya Gif</button>
        </div>
    )
}

export default Search
