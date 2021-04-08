import axios from "axios"
import { useState } from "react"

function Favorites() {
    let [category, setCategory] = useState('all')

    const getFavorites = (cat) =>{
        console.log(cat)
        axios({
            type: 'GET',
            url: `/api/favorite/?category=` + category
        }).then((response) =>{
            console.log(response.data.rows)
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
            
        </div>
        </>
    )
}

export default Favorites