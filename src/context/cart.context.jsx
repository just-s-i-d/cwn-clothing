import { createContext, useState, useEffect } from "react"

const addCartItem = (cartItems, productToAdd, itemQuantity) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if (existingItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    itemQuantity: 0
})
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [itemQuantity, setItemQuantity] = useState(0)
    useEffect(() => {
        const newCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setItemQuantity(newCount)
    }, [cartItems])
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd, itemQuantity))
    }
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart,itemQuantity}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
