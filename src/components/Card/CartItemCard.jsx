import React, { memo } from 'react'
import CardBase from './CardBase';
import styles from "./CartItemCard.module.scss";
import RemoveIcon from '../Icons/RemoveIcon';
import Button from '../ui/Button';

export default memo(function CartItemCard({ product, onIncrement, onDecrement, onRemove }) {
    const { id, image, title, price, count } = product;

    const handleRemoveCart = (e) => {
        e.preventDefault();
        onRemove(product.id)
    }

    const handleIncrement = (e) => {
        e.preventDefault();
        onIncrement(product.id);
    }

    const handleDecrement = (e) => {
        e.preventDefault();
        onDecrement(product.id);
    }

    return (
        <CardBase
            to={`/product/${id}`}
            image={image}
            className={styles.cartItemCard}
            variant='cart'
        >
            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>
                <Button
                    variant='remove'
                    onClick={handleRemoveCart}
                >
                    <RemoveIcon />
                    <span>Remove</span>
                </Button>
            </div>
            <div className={styles.itemControls}>
                <div className={styles.quantityControls}>
                    <Button
                        variant="counter"
                        onClick={handleDecrement}
                    >
                        -
                    </Button>
                    <span className={styles.count}>{count}</span>
                    <Button
                        variant='counter'
                        onClick={handleIncrement}
                    >
                        +
                    </Button>
                </div>
                <h3 className={styles.price}>
                    ${price}
                </h3>
            </div>
        </CardBase>
    )
})