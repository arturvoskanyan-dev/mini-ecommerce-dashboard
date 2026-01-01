import React from 'react'
import styles from "./Sort.module.scss";

export default function Sort({ sorts, setSorts }) {
    const handleChange = (e) => {
        const [criteria, direction] = e.target.value.split("-");

        setSorts((prev) => (
            prev.map((sort, i) => (
                sort.criteria === criteria ? { ...sort, direction, enabled: true } : sort
            ))
        ))
    }

    return (
        <div className={styles.sort}>
            <h2 className={styles.title}>Sort</h2>

            <div className={styles.line} />

            <div className={styles.sortControls}>
                <div className={styles.sortItem}>
                    <h3 className={styles.sortTitle}>Title</h3>
                    <select
                        className={styles.sortSelect}
                        value={`${sorts[1].criteria}-${sorts[1].direction}`}
                        onChange={handleChange}
                    >
                        <option value="title-asc">Title A-Z</option>
                        <option value="title-desc">Title Z-A</option>
                    </select>
                </div>
                <div className={styles.sortItem}>
                    <h3 className={styles.sortTitle}>Price</h3>
                    <select
                        className={styles.sortSelect}
                        value={`${sorts[0].criteria}-${sorts[0].direction}`}
                        onChange={handleChange}
                    >
                        <option value="price-asc">Price Low-High</option>
                        <option value="price-desc">Price High-Low</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
