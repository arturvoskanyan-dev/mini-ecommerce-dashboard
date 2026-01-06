import React from 'react'
import styles from "./PageHeader.module.scss";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PageHeader() {
    const location = useLocation();
    const {selectedProduct} = useSelector((state) => state.products);
    let title;

    if(location.pathname === "/products") {
        title = "Product list page";
    } else if(location.pathname.startsWith("/product/")) {
        title = `Product / ${selectedProduct?.title || ""}`
    }

    return (
        <header className={styles.header}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.line} />
        </header>
    )
}
