import React from 'react'
import SideBar from '../SideBar'
import { Outlet } from 'react-router-dom'
import styles from "./Layout.module.scss";

export default function Layout() {
    return (
        <div className={styles.layout}>
            <SideBar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}
