import React from 'react'
import styles from "./Card.module.scss";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cart/cartSlice';
import { NavLink } from 'react-router-dom';
import CartIcon from '../Icons/CartIcon';
import StarIcon from '../Icons/Star';

export default function Card({ title, image, price, rating, product }) {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(product));
    }

    return (
        <NavLink to={`/product/${product.id}`} className={styles.navLink}>
            <div className={styles.container}>
                <img
                    src={image}
                    className={styles.image}
                    alt={`Image ${title}`}
                />
                <div className={styles.line} />
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.info}>
                        <h3 className={styles.price}>${price}</h3>
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
                </div>
            </div>
        </NavLink>
    )
}
