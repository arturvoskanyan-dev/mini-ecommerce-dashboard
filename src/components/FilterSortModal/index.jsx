import React, { useEffect } from 'react'
import styles from "./FilterSortModal.module.scss";
import Filter from '../Filter';
import Sort from '../Sort';
import Button from '../ui/Button';
import CloseIcon from '../Icons/CloseIcon';

export default function FilterSortModal({
    filters,
    setFilters,
    sorts,
    setSorts,
    onClose
}) {
    // scroll lock overlay
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    return (
        <>
            <div className={styles.overlay} onClick={onClose} />

            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2 className={styles.title}>
                        Fitler & Sort
                    </h2>
                    <Button
                        onClick={onClose}
                        variant='close'
                    >
                        <CloseIcon />
                    </Button>
                </header>

                <div className={styles.body}>
                    <Filter 
                        filters={filters}
                        setFilters={setFilters}
                    />

                    <Sort 
                        sorts={sorts}
                        setSorts={setSorts}
                    />
                </div>
            </div>
        </>
    )
}
