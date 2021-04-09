import CategoriesItem from '../CategoriesItem/CategoriesItem'
function Categories (props) {
    console.log(props.category)
    return(
    <select onChange={(event) => props.setCategory(event.target.value)} className="categories">
        {props.category.map( (cat, index) => <CategoriesItem key = { index } cat = { cat } />)}
    </select>
    )
}
export default Categories