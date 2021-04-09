import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ImageItem.css'

const ImageItem = (props) => {
    const [ category, setCategory ] = useState( '' );

    const addToFavs = () => {
        console.log( 'in addToFavs' );
    }
    return (
        <div>
        {/* if ImageItem is being called from Search.jsx display images with options */}
        { props.search ? 
            <>
            <img className = "wrapper" src ={props.url.images.original.url} />
            <div className = "reaction"> 
                <select className = "likes" onChange={event => setCategory(event.target.value)}>
                    <option value="funny">Funny</option>
                    <option value="cohort">Cohort</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="nfsw">NSFW</option>
                    <option value="meme">Meme</option>
                </select>
                {/* if a category has been selected allow image to be added to favorites */}
                { category ? <button className = "delete" onClick = {() => addToFavs()} >Add To Favs</button> : '' }
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
