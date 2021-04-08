import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Search = () => {
    // const dispatch = useDispatch();

    const [ query, setQuery ] = useState( '' );

    const [ category, setCategory ] = useState( '' );

    const [ urls, setUrls ] = useState( [] );
    const handleChange = event => {
        setQuery( event.target.value );
    }

    const getGifs = () => {
        // dispatch( { type: 'SET_ELEMENTS', payload: [] } );
        console.log( 'in getGifs', query );
        axios.get( '/api/giphy/' + query )
            .then( response => {
                console.log( 'back from GET giphy', response );
                setUrls( response.data.data )
            }).catch( err => {
                alert( 'erroring fetching gifs' );
                console.log( err );
            })
    }

    // const addToFavs = () => {
    //     console.log( 'in addToFavs' );
    //     axios.post( '/api/favorite' )
    // }

    return (
        <div>
            <input onChange = {handleChange} value = {query} type = 'text' placeholder = 'Type of Gif You Haz To Find'></input>
            <button onClick = {() => getGifs()}>Search 4 Ya Gif</button>
            <section>
                { urls.map( ( image, index ) => 
                { return 
                    <div key = { index } >
                        <img src = {image.images.original.url} />
                        <select onChange={(event) => setCategory(event.target.value)} className="categories">
                            <option value="funny">Funny</option>
                            <option value="cohort">Cohort</option>
                            <option value="cartoon">Cartoon</option>
                            <option value="nfsw">NSFW</option>
                            <option value="meme">Meme</option>
                        </select>
                        { category ? <button onClick = {() => addToFavs()}>Fav Me Plz</button> : '' }
                    </div> 
                })}
            </section>
        </div>
    )
}

export default Search

//<div key = { index }><img src = {url.url} /></div>
