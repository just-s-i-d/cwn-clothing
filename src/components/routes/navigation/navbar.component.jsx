import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../../assets/083 crown.svg"
import { Usercontext } from "../../../context/context.component"
import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropDown from "../../cartdropdown/cartdropdown.component"
import "./navbar.styles.scss"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { CartContext } from "../../../context/cart.context"
const Navbar = () => {
    const { currentUser } = useContext(Usercontext)
    const {isCartOpen}=useContext(CartContext)
    const signOutHandler = async () => {
        await signOutUser()
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link to="/">
                    <div className="logo-container"><Logo />
                    </div>
                </Link>
                <div className="nav-links-container" >
                    <Link className="nav-link" to="shop">SHOP</Link>
                    {currentUser ? (<Link className="nav-link" onClick={signOutHandler}>SIGN OUT</Link>) : (<Link className="nav-link" to="auth">SIGN IN</Link>)}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown/>}
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navbar