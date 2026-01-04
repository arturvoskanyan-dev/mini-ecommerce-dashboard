import React, { memo } from 'react'
import styles from "./RatingFilter.module.scss";
import { RATING_OPTIONS } from '../../../constants/filters';
import Option from '../../ui/Option/Option';

export default memo(function RatingFilter({ value, onChange }) {
    const handleChangeRating = (e) => {
        onChange(+e.target.value)
    }

    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Rating</h3>
            <div className={styles.ratingContent}>
                <label className={styles.ratingLabel} htmlFor='ratingFilter'>
                    <h3>Minimum rating</h3>
                </label>
                <select
                    id='ratingFilter'
                    value={value}
                    onChange={handleChangeRating}
                    className={styles.ratingSelect}
                >
                    {RATING_OPTIONS.map((opt) => (
                        <Option
                            key={opt}
                            value={opt}
                            label={opt === 0 ? "All" : opt}
                        />
                    ))}
                </select>
            </div>
        </div>
    )
})
