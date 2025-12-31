import React from 'react'
import CardBase from './CardBase';
import styles from "./ProductCard.module.scss";
import StarIcon from '../Icons/Star';
import CartIcon from '../Icons/CartIcon';

export default function ProductCard({ product, onAddToCart }) {
    const { id, image, title, price, rating } = product;

    const handleAddToCart = (e) => {
        e.preventDefault();
        onAddToCart(product)
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

            <button
                onClick={handleAddToCart}
                className={styles.cartBtn}
            >
                <CartIcon className={styles.cartIcon} />
                Add to cart
            </button>
        </CardBase>
    )
}
