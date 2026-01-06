import React, { useCallback, useMemo } from 'react'
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../../store/slices/ui/uiSlice';
import { decrementCartItem, incrementCartItem, removeCart } from '../../store/slices/cart/cartSlice';
import CartHeader from './CartHeader';
import CartContent from './CartContent';
import CartFooter from './CartFooter';
import NotFound from '../ui/NotFound';

export default function Cart() {
    const { products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleCloseCart = useCallback(() => {
        dispatch(closeCart());
    }, [dispatch])

    const handleRemoveCart = useCallback((id) => {
        dispatch(removeCart(id));
    }, [dispatch])

    const handleIncrement = useCallback((id) => {
        dispatch(incrementCartItem(id));
    }, [dispatch])

    const handleDecrement = useCallback((id) => {
        dispatch(decrementCartItem(id));
    }, [dispatch])

    const subTotal = useMemo(() => {
        return products.reduce((acc, p) => acc += p.count * p.price, 0);
    }, [products]);

    return (
        <aside
            className={styles.cart}
            onClick={(e) => e.stopPropagation()}
        >
            <CartHeader onClose={handleCloseCart} />
            
            {
                products.length > 0
                    ? <CartContent
                        products={products}
                        onRemove={handleRemoveCart}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />
                    : <NotFound message='Your cart is empty' />
            }

            <CartFooter subTotal={subTotal} />
        </aside>
    )
}
