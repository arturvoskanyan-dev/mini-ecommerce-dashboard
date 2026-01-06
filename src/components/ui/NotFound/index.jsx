import React from 'react'
import styles from "./NotFound.module.scss";

export default function NotFound({
    message = "No products found",
    variant = "product"
}) {
    return (
        <div className={`${styles.notFound} ${styles[variant]}`}>
            <h3>{message}</h3>
        </div>
    )
}
