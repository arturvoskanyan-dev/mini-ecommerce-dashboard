import React from 'react'
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '../Icons/CloseIcon';
import { closeCart } from '../../store/slices/ui/uiSlice';
import { decrementCartItem, incrementCartItem, removeCart } from '../../store/slices/cart/cartSlice';
import CartItemCard from '../Card/CartItemCard';

export default function Cart() {
    const { products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleCloseCart = () => {
        dispatch(closeCart());
    }

    const handleRemoveCart = (id) => {
        dispatch(removeCart(id));
    }

    const handleIncrement = (id) => {
        dispatch(incrementCartItem(id));
    }

    const handleDecrement = (id) => {
        dispatch(decrementCartItem(id));
    }

    console.log(products);


    return (
        <aside
            className={styles.cart}
            onClick={(e) => e.stopPropagation()}
        >
            <header className={styles.header}>
                <h2 className={styles.title}>
                    Your Cart ({products.length})
                </h2>
                <button
                    className={styles.closeBtn}
                    onClick={handleCloseCart}
                >
                    <CloseIcon className={styles.closeIcon} />
                </button>
            </header>

            <div className={styles.content}>
                {
                    products.map((product) => (
                        <CartItemCard 
                            key={product.id}
                            product={product}
                            onRemove={handleRemoveCart}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                        />       
                    ))
                }
            </div>

            <footer className={styles.footer}>
                <div className={styles.total}>
                    <span>Total: </span>
                </div>
            </footer>
        </aside>
    )
}
