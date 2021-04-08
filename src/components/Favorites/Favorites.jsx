import axios from "axios"
import { useState } from "react"
import ImageList from '../ImageList/ImageList'

function Favorites() {
    let [category, setCategory] = useState('all')
    let [url,setUrl] = useState([])

    const getFavorites = (cat) =>{
        console.log(cat)
        axios({
            type: 'GET',
            url: `/api/favorite/?category=` + category
        }).then((response) =>{
            setUrl(response.data.rows)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
        <div>
            <h2>Favorited Images</h2>
        </div>
        <div>
        <select onChange={(event) => setCategory(event.target.value)} className="categories">
            <option value="all">all</option>
            <option value="funny">Funny</option>
            <option value="cohort">Cohort</option>
            <option value="cartoon">Cartoon</option>
            <option value="nfsw">NSFW</option>
            <option value="meme">Meme</option>

        </select>
        <button onClick={() => getFavorites(category)}>Click</button>
        </div>
        <div>
            <ImageList url={url}/>
        </div>
        </>
    )
}

export default Favorites