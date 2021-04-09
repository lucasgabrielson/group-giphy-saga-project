
function CategoriesItem (props) {
    return(
    <option value={props.cat.name}>{props.cat.name}</option>
    )
}

export default CategoriesItem