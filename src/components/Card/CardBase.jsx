import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./CardBase.module.scss";

export default function CardBase({ 
    to, 
    image, 
    children, 
    className, 
    variant="product"
}) {
    return (
        <NavLink to={to} className={styles.navLink}>
            <div
                className={`${styles.container} ${styles[variant]} ${className || ""}`}
            >
                <img
                    src={image}
                    alt={`Image ${children?.props?.title || ""}`}
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
