import { createContext, useState, useEffect } from "react";
import { getCollectionandDocuments } from "../components/utils/firebase/firebase.utils";
// import SHOP_DATA from "../Shop-data"


export const CategoriesContext = createContext({
    categoryMap: {}
})

export const CategoriesProvider = ({ children }) => {
    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCollectionandDocuments()
            setCategoryMap(categoryMap)
        }
        getCategories()
    }, [])
    const [categoryMap, setCategoryMap] = useState({})
    const value = { categoryMap }
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}