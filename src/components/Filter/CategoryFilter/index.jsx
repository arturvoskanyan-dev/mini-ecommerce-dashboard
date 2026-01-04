import React, { memo } from 'react'
import styles from "./CategoryFilter.module.scss";
import CategoryItem from './CategoryItem';

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
                {categories.map((category) => (
                    <CategoryItem
                        key={category}
                        category={category}
                        checked={selected.includes(category)}
                        onChange={handleChangeCategory}
                    />
                ))}
            </div>
        </div>
    )
})
