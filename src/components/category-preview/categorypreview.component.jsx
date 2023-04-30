import { Link } from "react-router-dom"
import ProductCard from "../product-card/product-card.component"
import "./categorypreview.styles.scss"
const CategoryPreview = ({ title, product }) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {product.filter((_, idx) => idx < 4).map(product => 
                    <ProductCard product={product} />)}
            </div>
        </div>
    )
}
export default CategoryPreview