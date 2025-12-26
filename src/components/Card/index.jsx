import React from 'react'
import styles from "./Card.module.scss";

export default function Card({ title, image, price, rating }) {
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
            </div>
        </div>
    )
}
