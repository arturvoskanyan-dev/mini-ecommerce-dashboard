import React, { memo } from 'react'
import CardBase from './CardBase';
import styles from "./ProductCard.module.scss";
import StarIcon from '../Icons/Star';
import CartIcon from '../Icons/CartIcon';
import Button from '../ui/Button';

export default memo(function ProductCard({
    product,
    cartItem,
    onAddToCart,
    onIncrement,
    onDecrement
}) {
    const { id, image, title, price, rating } = product;
    const isInCart = !!cartItem;
    const count = cartItem?.count;

    const handleAddToCart = (e) => {
        e.preventDefault();
        onAddToCart(product)
    }

    const handleIncrement = (e) => {
        e.preventDefault();
        onIncrement(id);
    }

    const handleDecrement = (e) => {
        e.preventDefault();
        onDecrement(id);
    }

    return (
        <CardBase
            to={`/product/${id}`}
            image={image}
            className={styles.productCard}
        >
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.info}>
                <span className={styles.price}>${price}</span>

                <span className={styles.rating}>
                    <StarIcon className={styles.starIcon} />
                    {rating.rate}
                </span>
            </div>
            {
                !isInCart ?
                    <Button
                        onClick={handleAddToCart}
                        variant='cart'
                    >
                        <CartIcon />
                        Add to cart
                    </Button>
                    :
                    <div className={styles.quantityControls}>
                        <Button
                            variant='counter'
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
            }
        </CardBase>
    )
})