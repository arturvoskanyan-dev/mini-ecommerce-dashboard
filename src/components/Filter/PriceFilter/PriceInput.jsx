import React from 'react'
import styles from "./PriceFilter.module.scss";

export default function PriceInput({label, value, onChange, onBlur}) {
    return (
        <div className={styles.priceInfo}>
            <h3 className={styles.label}>{label}</h3>
            <input 
                type='text'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={styles.priceInput}
            />
        </div>
    )
}