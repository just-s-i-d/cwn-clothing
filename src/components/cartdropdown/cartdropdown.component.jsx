import "./cartdropdown.styles.scss"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { useContext} from "react"
import {useNavigate} from "react-router-dom"
import { CartContext } from "../../context/cart.context"


const CartDropDown=()=>{
    const {cartItems}=useContext(CartContext)
    const navigate=useNavigate()
    const goToCheckOutHandler=()=>navigate("/checkout")
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(cartItem=><CartItem key={cartItem.id} cartItem={cartItem}/> )}
            </div>
            <Button onClick={goToCheckOutHandler}>Go to checkout</Button>
        </div>
    )
}
export default CartDropDown