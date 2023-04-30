import { useContext } from "react"
import { CategoriesContext } from "../../../context/categoryMap.context"

import CategoryPreview from "../../category-preview/categorypreview.component"
const CategoriesPreview = () => {
    const { categoryMap } = useContext(CategoriesContext)
    return (
        <>
            {
                Object.keys(categoryMap).map(title => {
                    const product = categoryMap[title]
                    return <CategoryPreview title={title} product={product} />
                }
                )
            }
        </>
    )
}
export default CategoriesPreview