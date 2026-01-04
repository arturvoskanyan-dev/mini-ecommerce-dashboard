import React, { memo } from 'react'
import styles from "./Cart.module.scss";
import CartItemCard from '../Card/CartItemCard';

export default memo(function CartContent({products, onRemove, onIncrement, onDecrement}) {
    return (
        <div className={styles.content}>
            {
                products.map((product) => (
                    <CartItemCard
                        key={product.id}
                        product={product}
                        onRemove={onRemove}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />
                ))
            }
        </div>
    )
})