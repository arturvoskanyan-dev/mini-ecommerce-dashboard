import React from 'react'
import styles from "./Button.module.scss";

export default function Button({
    children,
    onClick,
    variant = "default",
    disabled = false,
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${styles.button} ${styles[variant]}`}
        >
            {children}
        </button>
    )
}
