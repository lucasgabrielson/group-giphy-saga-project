import React from 'react'
import ImageItem from '../ImageItem/ImageItem'

function ImageList (props){
    return (
        <div>
            {props.url.map((gallery) => <ImageItem url={gallery.url}/>)}
        </div>
    )
}

export default ImageList
