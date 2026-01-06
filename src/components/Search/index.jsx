import React, { useEffect, useState } from 'react'
import styles from "./Search.module.scss";
import SearchIcon from '../Icons/SearchIcon';
import Button from '../ui/Button';
import FilterIcon from '../Icons/FilterIcon';

export default function Search({ filters, setFilters, onOpen }) {
    const [query, setQuery] = useState(filters.search);

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFilters(prev => ({
                ...prev,
                search: query
            }))
        }, 500)

        return () => clearTimeout(timeout);
    }, [query, setFilters])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SearchIcon className={styles.searchIcon} />
                <input
                    type='text'
                    value={query}
                    onChange={handleChange}
                    placeholder='Search product'
                    className={styles.searchInput}
                />
            </div>
            <Button
                onClick={onOpen}
                variant='openFilter'
            >
                <FilterIcon />
                <span>Filter & Sort</span>
            </Button>
        </div>
    )
}