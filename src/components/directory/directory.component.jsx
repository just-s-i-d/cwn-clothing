import "./directory.styles.scss"
import Categoryitem from "../category-item/category-item.component"

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) =>
                <Categoryitem key={category.id} categories={category} />)}
        </div >
    )
}
export default Directory