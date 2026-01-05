import React, { memo } from 'react'
import styles from "./RatingFilter.module.scss";
import { RATING_OPTIONS } from '../../../constants/filters';
import Dropdown from '../../ui/Dropdown';

export default memo(function RatingFilter({ value, onChange }) {
    return (
        <div className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Rating</h3>
            <div className={styles.ratingContent}>
                <Dropdown
                    label="Minimum rating"
                    options={RATING_OPTIONS}
                    value={value}
                    onChange={onChange}
                    getLabel={(opt) => opt === 0 ? "All" : opt}
                    getValue={(opt) => opt}
                />
            </div>
        </div>
    )
})