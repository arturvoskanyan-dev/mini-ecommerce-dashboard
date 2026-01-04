import React from 'react'
import styles from "./ProductDetails.module.scss";
import Button from '../../components/ui/Button';

export default function ProductControls({
    cartItem,
    onIncrement,
    onDecrement,
    onAddToCart,
    onOpenCart
}) {
    const isInCart = !!cartItem;
    const count = cartItem?.count;

    return (
        <div className={styles.productControls}>
            {isInCart && (
                <div className={styles.quantityControls}>
                    <Button
                        variant='counter'
                        onClick={onDecrement}
                    >
                        -
                    </Button>
                    <span className={styles.count}>{count}</span>
                    <Button
                        variant='counter'
                        onClick={onIncrement}
                    >
                        +
                    </Button>
                </div>
            )}
            {!isInCart ? (
                <Button
                    variant="product"
                    onClick={onAddToCart}
                >
                    Add to cart
                </Button>
            ) : (
                <Button
                    variant="product"
                    onClick={onOpenCart}
                >
                    In the cart
                </Button>
            )}
        </div>
    )
}
