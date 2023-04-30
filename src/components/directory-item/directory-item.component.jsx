import "./directory-item.styles.scss"
import { useNavigate } from "react-router-dom"

const DirectoryItem =({categories})=>{
    const {title,imageUrl,route}=categories
    const navigate=useNavigate()
    const navigateHandler=()=>navigate(route)
    return (
        <div className="directory-item-container" onClick={navigateHandler}>
          <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} />
          <div className="body">
            <h2>{title.toUpperCase()}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}
export default DirectoryItem