import React from 'react'
import styles from "./ProductDetails.module.scss";
import StarIcon from '../../components/Icons/Star';

export default function ProductInfo({
    title,
    price,
    description,
    rating
}) {
    return (
        <>
            <h2 className={styles?.title}>
                {title}
            </h2>
            <span className={styles.ratingContent}>
                <StarIcon className={styles.starIcon} />
                <span className={styles.rating}>
                    {rating?.rate}
                </span>
                <span>
                    ({rating?.count})
                </span>
            </span>
            <h3 className={styles.price}>
                ${price}
            </h3>
            <p className={styles.description}>
                {description}
            </p>
        </>
    )
}
