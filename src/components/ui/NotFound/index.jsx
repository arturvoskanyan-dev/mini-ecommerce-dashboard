import React from 'react'
import styles from "./NotFound.module.scss";

export default function NotFound({message = "No products found"}) {
    return (
        <div className={styles.notFound}>
            <h3>{message}</h3>
        </div>
    )
}
