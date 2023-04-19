import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../../assets/083 crown.svg"
import "./navbar.styles.scss"
const Navbar = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to="/">
                    <div className="logo-container"><Logo />
                    </div>
                </Link>
                <div className="nav-links-container" >
                    <Link className="nav-link" to="shop">SHOP</Link>
                    <Link className="nav-link" to="sign-in">SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navbar