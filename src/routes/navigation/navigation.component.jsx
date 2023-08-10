import { Fragment } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectIsCartOpen } from "../../store/cart/cart.selector"

const Navigation = () => {

    // useSelector extracts values from your whole entire redux store
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen  = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className="logo" />
                </LogoContainer >

                <NavLinks>
                    <NavLink to="/shop">Shop</NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span'
                                onClick={signOutUser}>Sign Out
                            </NavLink>
                        ) : (
                            <NavLink to="/signin">Sign In</NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation