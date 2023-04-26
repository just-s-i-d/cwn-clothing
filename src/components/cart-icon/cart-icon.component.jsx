import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/cart-icon.svg"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,itemQuantity}=useContext(CartContext)
    const cartOpenHandler=()=>{
        setIsCartOpen(!isCartOpen)
    }
    return (
        <div className="cart-icon-container" onClick={cartOpenHandler}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemQuantity}</span>
        </div>
    )
}
export default CartIcon