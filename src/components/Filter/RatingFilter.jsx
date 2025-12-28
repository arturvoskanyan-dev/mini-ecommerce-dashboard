import React from 'react'
import styles from "./Filter.module.scss";

export default function RatingFilter({ value, onChange }) {
    const handleChangeRating = (e) => {
        onChange(+e.target.value)
    }

    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Rating</h3>
            <div className={styles.ratingContent}>
                <label className={styles.ratingLabel} htmlFor='ratingFilter'>Minimum rating</label>
                <select
                    id='ratingFilter'
                    value={value}
                    onChange={handleChangeRating}
                >
                    <option value={0}>All</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
        </div>
    )
}
