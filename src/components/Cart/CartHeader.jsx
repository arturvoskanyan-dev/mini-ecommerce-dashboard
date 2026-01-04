import React from 'react'
import styles from "./Cart.module.scss";
import CloseIcon from '../Icons/CloseIcon';
import Button from '../ui/Button';

export default function CartHeader({onClose}) {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>
                Your Cart
            </h2>
            <Button
                variant="close"
                onClick={onClose}
            >
                <CloseIcon />
            </Button>
        </header>
    )
}