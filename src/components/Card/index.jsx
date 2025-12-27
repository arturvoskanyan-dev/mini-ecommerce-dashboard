import React from 'react'
import styles from "./Card.module.scss";
import { useDispatch } from 'react-redux';
import { addToCart, removeCart } from '../../store/slices/cart/cartSlice';
import { NavLink } from 'react-router-dom';

export default function Card({ title, image, price, rating, product }) {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault();
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
        <NavLink to={`/product/${product.id}`} className={styles.navLink}>
            <div className={styles.container}>
                <img
                    src={image}
                    className={styles.image}
                    alt={`Image ${title}`}
                />
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.info}>
                        <h3 className={styles.price}>${price}</h3>
                        <span className={styles.rating}>{rating.rate}</span>
                    </div>
                    <button onClick={handleAddToCart}>add cart</button>
                    <button onClick={handleRemove}>Remove</button>
                    {/* <button onClick={inc}>+</button> */}
                </div>
            </div>
        </NavLink>
    )
}
