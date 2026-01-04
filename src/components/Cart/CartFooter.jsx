import React from 'react'
import styles from "./Cart.module.scss";
import Button from '../ui/Button';

export default function CartFooter({ subTotal }) {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.totalTitle}>Cart Total</h2>
            <div className={styles.total}>
                <div className={styles.totalRow}>
                    <span>Subtotal:</span>
                    <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className={styles.line} />
                <div className={styles.totalRow}>
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className={styles.line} />
                <div className={styles.totalRow}>
                    <span>Total:</span>
                    <span>${subTotal.toFixed(2)}</span>
                </div>
            </div>
            <Button
                variant='checkout'
                disabled={true}
            >
                Procees to checkout
            </Button>
        </footer>
    )
}