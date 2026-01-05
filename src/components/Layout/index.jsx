import React, { useCallback, useEffect } from 'react'
import SideBar from '../SideBar'
import { Outlet, useLocation } from 'react-router-dom'
import styles from "./Layout.module.scss";
import Cart from '../Cart';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../../store/slices/ui/uiSlice';
import PageHeader from '../ui/PageHeader';
import ModalView from '../ui/ModalView';

export default function Layout() {
    const { isCartOpen } = useSelector((state) => state.ui);
    const location = useLocation();
    const dispatch = useDispatch();

    const handleCloseCart = useCallback(() => {
        dispatch(closeCart());
    }, [dispatch]);

    // close the cart overlay when the route change
    useEffect(() => {
        if (isCartOpen) {
            dispatch(closeCart());
        }
    }, [location.pathname, dispatch])

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <PageHeader />
                <SideBar />
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            {isCartOpen && (
                <ModalView
                    isOpen={isCartOpen}
                    onClose={handleCloseCart}
                    variant='cart'
                >
                    <Cart />
                </ModalView>
            )}
        </div>
    )
}
