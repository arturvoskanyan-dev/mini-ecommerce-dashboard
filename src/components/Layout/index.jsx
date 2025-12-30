import React from 'react'
import SideBar from '../SideBar'
import { Outlet } from 'react-router-dom'
import styles from "./Layout.module.scss";
import Cart from '../Cart';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../../store/slices/ui/uiSlice';

export default function Layout() {
    const { isCartOpen } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

    const handleCloseCart = () => {
        dispatch(closeCart());
    }

    return (
        <div className={styles.layout}>
            <SideBar />
            <main className={styles.main}>
                <Outlet />
            </main>
            {
                isCartOpen && (
                    <>
                        {/* Overlay */}
                        <div 
                            className={styles.overlay}
                            onClick={handleCloseCart}
                        />

                        <Cart />
                    </>
                )
            }
        </div>
    )
}
