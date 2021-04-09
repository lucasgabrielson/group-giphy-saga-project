import axios from "axios"
import { useEffect, useState } from "react"
import ImageList from '../ImageList/ImageList'
import CategoriesList from '../CategoriesList/CategoriesList'

function Favorites() {
    let [category, setCategory] = useState('all')
    let [url,setUrl] = useState([])
    let [cats, setCats] = useState({name: 'all'})

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

    const getCategories = () => {
        ///api/category
        axios({
            type: 'GET',
            url: `/api/category`
        }).then((response) =>{
            console.log( response.data );
        setCats(response.data)
        }).catch((err)=>{
            console.log(err)
        })

    }
    
    useEffect(() => {getCategories() }, [])

    return(
        <>
        <div>
            <h2>Favorited Images</h2>
        </div>
        <div>

            {/* <option value="all">all</option> */}
            <CategoriesList category={cats} setCategory={setCategory} />
        <button onClick={() => getFavorites(category)}>Click</button>
        </div>
        <div>
            <ImageList url={url} search={false}/>
        </div>
        </>
    )
}

export default Favorites