import axios from "axios"
import { useState } from "react"

function Favorites() {
    let [category, setCategory] = useState('all')

    const getFavorites = (category) =>{
        
    }
    return(
        <>
        <div>
            <h2>Favorited Images</h2>
        </div>
        <div>
        <select className="categories">
            <option value="all" onChange={(event) => setSupport(event.target.value)} selected>all</option>
            <option value="funny" onChange={(event) => setSupport(event.target.value)}>Funny</option>
            <option value="cohort" onChange={(event) => setSupport(event.target.value)}>Cohort</option>
            <option value="cartoon" onChange={(event) => setSupport(event.target.value)}>Cartoon</option>
            <option value="nfsw" onChange={(event) => setSupport(event.target.value)}>NSFW</option>
            <option value="meme" onChange={(event) => setSupport(event.target.value)}>Meme</option>
        </select>
        </div>
        </>
    )
}

export default Favorites