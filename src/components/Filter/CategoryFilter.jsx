import React, { memo } from 'react'
import styles from "./Filter.module.scss";

export default memo(function CategoryFilter({ categories, selected, onChange }) {
    const handleChangeCategory = (e) => {
        const { value, checked } = e.target;

        const category = checked
            ? [...selected, value]
            : selected.filter((category) => category !== value);

        onChange(category)
    }

    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Categories</h3>
            <div className={styles.categoryContainer}>
                {
                    categories.map((category) => (
                        <label className={styles.categoryLabel} key={category}>
                            <input
                                type='checkbox'
                                value={category}
                                checked={selected.includes(category)}
                                onChange={handleChangeCategory}
                                className={styles.checkbox}
                            />
                            {category}
                        </label>
                    ))
                }
            </div>
        </div>
    )
})
