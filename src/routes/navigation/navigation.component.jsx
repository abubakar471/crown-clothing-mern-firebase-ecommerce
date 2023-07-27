import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import { UserContext } from "../../components/contexts/user.context"
import { CartContext } from "../../components/contexts/cart.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
                    {
                        currentUser ? (<span className="nav-link"
                            onClick={signOutUser}>Sign Out</span>) : (
                            <Link className="nav-link" to="/signin">Sign In</Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation