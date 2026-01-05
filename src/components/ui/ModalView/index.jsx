import React, { useEffect } from 'react'
import styles from "./ModalView.module.scss";

export default function ModalView({
    isOpen,
    onClose,
    variant = "cart",
    children
}) {
    // slide-out with overlay and scroll lock
    useEffect(() => {
        document.body.style.overflow = isOpen
            ? "hidden"
            : "auto"

        return () => document.body.style.overflow = "auto";
    }, [isOpen])

    return (
        <>
            <div className={styles.overlay} onClick={onClose} />

            <div className={`${styles.modal} ${styles[variant]}`}>
                {children}
            </div>
        </>
    )
}
