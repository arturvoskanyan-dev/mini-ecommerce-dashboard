import React from 'react'
import styles from "./CartBadge.module.scss";

export default function CartBadge({count, max = 99}) {
    if(!count || count <= 0) return null;

    const displayCount = count > max ? `${max}+` : count;

    return (
        <span className={styles.badge}>
            {displayCount}
        </span>
    )
}
