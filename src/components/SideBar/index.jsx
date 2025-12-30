import React from 'react'
import styles from "./SideBar.module.scss";
import ProductsIcon from '../Icons/ProductsIcon';
import CartIcon from '../Icons/CartIcon';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.line} />
            <nav className={styles.nav}>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.navItem} ${styles.navItem_active}`
                            : styles.navItem
                    }
                >
                    <ProductsIcon className={styles.navIcon} />
                </NavLink>
                <div className={styles.navItem}>
                    <CartIcon className={styles.navIcon} />
                </div>
            </nav>
        </aside>
    )
}
