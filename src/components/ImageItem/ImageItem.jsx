import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ImageItem.css'
import axios from 'axios';

const ImageItem = (props) => {
    // local state that holds the category chosen
    const [ category, setCategory ] = useState( 0 );

    const updateCategory = event => {
        switch( event.target.value ) {
            case 'funny':
                setCategory( 1 );
                break;
            case 'cohort':
                setCategory( 2 );
                break;
            case 'cartoon':
                setCategory( 3 );
                break;
            case 'nsfw':
                setCategory( 4 );
                break;
            case 'meme':
                setCategory( 5 );
                break;
            default:
                console.log( 'you done goofed' );
        }
    }

    const addToFavs = (url) => {
        const objectToSend = {
            url: url,
            category: category
        }
        console.log( 'in addToFavs', objectToSend );
        axios.post( '/api/favorite', objectToSend )
            .then( response => {
                console.log( 'back from POST /api/favorite' );
            }).catch( err => {
                console.log( err );
                alert( 'error adding favorite to database' )
            })
    }
    return (
        <div>
        {/* if ImageItem is being called from Search.jsx display images with options */}
        { props.search ? 
            <>
            <img className = "wrapper" src ={props.url.images.original.url} />
            <div className = "reaction"> 
                <select className = "likes" onChange={updateCategory}>
                    <option value="funny">Funny</option>
                    <option value="cohort">Cohort</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="nfsw">NSFW</option>
                    <option value="meme">Meme</option>
                </select>
                {/* if a category has been selected allow image to be added to favorites */}
                { category ? <button className = "delete" onClick = {() => addToFavs(props.url.images.original.url)} >Add To Favs</button> : '' }
            </div>    
            </>
            : 
            // if ImageItem is being called from Favorites display image only
            <img src = {props.url.url} /> 
        }
        </div>
    )
}

export default ImageItem
