import React from 'react'
import styles from "./Card.module.scss";
import { useDispatch } from 'react-redux';
import { addToCart, removeCart } from '../../store/slices/cart/cartSlice';

export default function Card({ title, image, price, rating, product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    const handleRemove = () => {
        dispatch(removeCart(product.id));
    }

    // const inc = () => {
    //     // dispatch(incrementProductCount(product.id))
    //     dispatch(decrementCartItem(product.id))
    // }

    // console.log(product);
    

    return (
        <div className={styles.cardContainer}>
            <img
                src={image}
                className={styles.cardImage}
                alt={`Image ${title}`}
            />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <div className={styles.cardInfo}>
                    <h3 className={styles.cardPrice}>${price}</h3>
                    <span className={styles.cardRating}>{rating.rate}</span>
                </div>
                <button onClick={handleAddToCart}>add cart</button>
                <button onClick={handleRemove}>Remove</button>
                {/* <button onClick={inc}>+</button> */}
            </div>
        </div>
    )
}
