import {
    CartDropDownContainer,
    EmptyMessage, CartItems
} from  './cart-dropdown.styles'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'


const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    ) : (
                        <EmptyMessage> cart is empty</EmptyMessage>
                    )
                }

            </CartItems>
            <Button onClick={goToCheckoutHandler} className='button'>Go to checkout</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown