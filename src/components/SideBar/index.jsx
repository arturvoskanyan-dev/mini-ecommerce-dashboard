import React from 'react'
import styles from "./SideBar.module.scss";
import ProductsIcon from '../Icons/ProductsIcon';
import CartIcon from '../Icons/CartIcon';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openCart } from '../../store/slices/ui/uiSlice';

export default function SideBar() {
    const dispatch = useDispatch();

    const handleOpenCart = () => {
        dispatch(openCart());
    }

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
                <div
                    onClick={handleOpenCart}
                    className={styles.navItem}
                >
                    <CartIcon className={styles.navIcon} />
                </div>
            </nav>
        </aside>
    )
}
