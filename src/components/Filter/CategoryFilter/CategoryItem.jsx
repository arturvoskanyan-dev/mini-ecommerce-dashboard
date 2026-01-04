import React from 'react'
import styles from "./CategoryFilter.module.scss";

export default function CategoryItem({category, checked, onChange}) {
    return (
        <label className={styles.categoryLabel}>
            <input
                type='checkbox'
                value={category}
                checked={checked}
                onChange={onChange}
                className={styles.checkbox}
            />
            {category}
        </label>
    )
}