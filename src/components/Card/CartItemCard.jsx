import React from 'react'
import CardBase from './CardBase';
import styles from "./CartItemCard.module.scss";
import RemoveIcon from '../Icons/RemoveIcon';

export default function CartItemCard({ product, onIncrement, onDecrement, onRemove }) {
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
                <button
                    className={styles.removeBtn}
                    onClick={handleRemoveCart}
                >
                    <RemoveIcon className={styles.removeIcon} />
                    <span>Remove</span>
                </button>
            </div>
            <div className={styles.itemControls}>
                <div className={styles.quantityControls}>
                    <button
                        className={styles.minusBtn}
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                    <span className={styles.count}>{count}</span>
                    <button
                        className={styles.plusBtn}
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                </div>
                <h3 className={styles.price}>
                    ${price}
                </h3>
            </div>
        </CardBase>
    )
}
