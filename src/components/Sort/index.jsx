import React, { memo } from 'react'
import styles from "./Sort.module.scss";
import { SORT_CONFIG } from '../../constants/sortConfig';

export default memo(function Sort({ sorts, setSorts }) {
    const handleChange = (e) => {
        const [criteria, direction] = e.target.value.split("-");

        setSorts((prev) => (
            prev.map((sort) => (
                sort.criteria === criteria ? { ...sort, direction, enabled: true } : sort
            ))
        ))
    }

    const getSortValue = (sorts, criteria) => {
        const sort = sorts.find((s) => s.criteria === criteria);
        return sort ? `${sort.criteria}-${sort.direction}` : "";
    }

    return (
        <div className={styles.sort}>
            <h2 className={styles.title}>Sort</h2>

            <div className={styles.line} />

            <div className={styles.sortControls}>
                {SORT_CONFIG.map(({ criteria, label, options }) => (
                    <div className={styles.sortItem} key={criteria}>
                        <h3 className={styles.sortTitle}>{label}</h3>

                        <select
                            className={styles.sortSelect}
                            value={getSortValue(sorts, criteria)}
                            onChange={handleChange}
                        >
                            {options.map((opt) => (
                                <option
                                    key={opt.value}
                                    value={`${criteria}-${opt.value}`}
                                >
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
})
