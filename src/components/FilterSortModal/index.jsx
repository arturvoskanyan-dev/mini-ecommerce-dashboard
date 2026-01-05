import React from 'react'
import styles from "./FilterSortModal.module.scss";
import Filter from '../Filter';
import Sort from '../Sort';
import Button from '../ui/Button';
import CloseIcon from '../Icons/CloseIcon';
import ModalView from '../ui/ModalView';

export default function FilterSortModal({
    filters,
    setFilters,
    sorts,
    setSorts,
    onClose,
    isOpen
}) {
    return (
        <>
            <ModalView
                isOpen={isOpen}
                onClose={onClose}
                variant='filter'
            >
                <div>
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
            </ModalView>
        </>
    )
}
