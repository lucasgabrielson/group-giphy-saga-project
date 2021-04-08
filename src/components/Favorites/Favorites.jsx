import axios from "axios"

function Favorites() {

    const getFavorites = () =>{
    
    }

    return(
        <>
        <div>
            <h2>Favorited Images</h2>
        </div>
        <div>
        <select className="categories">
            <option value="funny">Funny</option>
            <option value="cohort">Cohort</option>
            <option value="cartoon">Cartoon</option>
            <option value="nfsw">NSFW</option>
            <option value="meme">Meme</option>
        </select>
        </div>
        </>
    )
}

export default Favorites