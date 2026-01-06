import React, { useCallback, useMemo } from 'react'
import styles from "./SideBar.module.scss";
import ProductsIcon from '../Icons/ProductsIcon';
import CartIcon from '../Icons/CartIcon';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../../store/slices/ui/uiSlice';
import CartBadge from '../ui/CartBadge';

export default function SideBar() {
    const { products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleOpenCart = useCallback(() => {
        dispatch(openCart());
    }, [dispatch]);

    const totalCount = useMemo(() =>
        products.reduce((acc, p) => acc = acc + p.count, 0),
        [products]
    )

    return (
        <aside className={styles.sidebar}>
            <NavLink to="/">
                <img src='/logo.svg' className={styles.logo} />
            </NavLink>
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
                    <div className={styles.cartIconWrapper}>
                        <CartBadge count={totalCount} />
                        <CartIcon className={styles.navIcon} />
                    </div>
                </div>
            </nav>
        </aside>
    )
}
