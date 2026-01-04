import React from 'react'
import styles from "./Sort.module.scss";
import Option from '../ui/Option/Option';

export default function SortItem({ label, criteria, onChange, options }, value) {
    return (
        <div className={styles.sortItem}>
            <h3 className={styles.sortTitle}>{label}</h3>

            <select
                className={styles.sortSelect}
                value={value}
                onChange={onChange}
            >
                {options.map((opt) => (
                    <Option
                        key={opt.value}
                        value={opt.value}
                        label={opt.label}
                        prefix={criteria}
                    />
                ))}
            </select>
        </div>
    )
}
