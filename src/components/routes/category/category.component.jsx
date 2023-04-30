import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../../context/categoryMap.context'
import { useContext } from 'react'
import './category.styles.scss'
import { useEffect, useState } from 'react'
import ProductCard from '../../product-card/product-card.component'

const Category = () => {
    const { category } = useParams()
    const { categoryMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoryMap[category])
    useEffect(() => {
        setProducts(categoryMap[category])
    }, [category, categoryMap])
    return (
        <div className="category-container">
            {products && products.map(product => (<ProductCard key={product.id} product={product} />))}
        </div>
    )
}

export default Category