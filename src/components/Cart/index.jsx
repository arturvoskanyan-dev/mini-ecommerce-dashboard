import React from 'react'
import styles from "./Cart.module.scss";

export default function Cart() {
    return (
        <aside
            className={styles.cart}
            onClick={(e) => e.stopPropagation()}
        >
            <header className={styles.header}>
                <h2>Your Cart</h2>
            </header>

            <div className={styles.content}>

            </div>

            <footer className={styles.footer}>
                <div className={styles.total}>
                    <span>Total: </span>
                </div>
            </footer>
        </aside>
    )
}
