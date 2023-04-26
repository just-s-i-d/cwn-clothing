import "./cartdropdown.styles.scss"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { useContext} from "react"
import {Link} from "react-router-dom"
import { CartContext } from "../../context/cart.context"
import CheckOut from "../routes/checkout/checkout.component"
const CartDropDown=()=>{
    const {cartItems}=useContext(CartContext)
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(cartItem=><CartItem key={cartItem.id} cartItem={cartItem}/> )}
            </div>
            <Link to="checkout" path> <Button>Go to checkout</Button></Link>
        </div>
    )
}
export default CartDropDown