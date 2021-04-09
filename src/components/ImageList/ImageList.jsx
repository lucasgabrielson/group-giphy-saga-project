import React from 'react'
import ImageItem from '../ImageItem/ImageItem';
import './ImageList.css';

function ImageList (props){
    return (
        <div className = "content">
            {props.url.map((gallery, index) => <ImageItem key = { index } url = { gallery } search = { props.search }/>)}
        </div>
    )
}

export default ImageList


