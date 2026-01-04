import React, { memo, useCallback, useMemo } from 'react'
import styles from "./Sort.module.scss";
import { SORT_CONFIG } from '../../constants/sortConfig';
import SortItem from './SortItem';

export default memo(function Sort({ sorts, setSorts }) {
    const handleChange = useCallback((e) => {
        const [criteria, direction] = e.target.value.split("-");

        setSorts((prev) => (
            prev.map((sort) => (
                sort.criteria === criteria ? { ...sort, direction, enabled: true } : sort
            ))
        ))
    }, [setSorts])
    
    const sortValues = useMemo(() => {
        const map = new Map();
        sorts.forEach((s) => map.set(s.criteria, `${s.criteria}-${s.direction}`));
        return map;
    }, [sorts])

    return (
        <div className={styles.sort}>
            <h2 className={styles.title}>Sort</h2>

            <div className={styles.line} />

            <div className={styles.sortControls}>
                {SORT_CONFIG.map(({ criteria, label, options }) => (
                    <SortItem 
                        key={criteria}
                        criteria={criteria}
                        label={label}
                        options={options}
                        value={sortValues.get(criteria)}
                        onChange={handleChange}
                    />
                ))}
            </div>
        </div>
    )
})
