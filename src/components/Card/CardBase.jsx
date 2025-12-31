import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./CardBase.module.scss";

export default function CardBase({to, image, alt, children, className}) {
    return (
        <NavLink to={to} className={styles.navLink}>
            <div className={`${styles.container} ${className || ""}`}>
                <img 
                    src={image}
                    alt={alt}
                    className={styles.image}
                />

                <div className={styles.line} />

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </NavLink>
    )
}
