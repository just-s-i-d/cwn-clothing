import { createContext, useState, useEffect } from "react"

const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if (existingItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}


const removeItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove)
    }
    return cartItems.map(cartItem => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

const clearItem = (cartItems, itemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    itemQuantity: 0,
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartTotal: 0
})
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [itemQuantity, setItemQuantity] = useState(0)
    
    useEffect(() => {
        const newCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setItemQuantity(newCount)
    }, [cartItems])
    
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])
   
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd, itemQuantity))
    }
    
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeItem(cartItems, productToRemove))
    }
    
    const clearItemFromCart = (itemToClear) => {
        setCartItems(clearItem(cartItems, itemToClear))
    }
    
    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        itemQuantity,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
    }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
