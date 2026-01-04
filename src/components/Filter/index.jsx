import React, { useCallback } from 'react'
import styles from "./Filter.module.scss";
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';
import { CATEGORIES } from '../../constants/filters';

export default function Filter({ filters, setFilters }) {
    const handleChangeCategory = useCallback((categories) => {
        setFilters((prev) => ({...prev, category: categories}));
    }, [setFilters]);

    const handleChangePrice = useCallback((min, max) => {
        setFilters((prev) => ({...prev, minPrice: min, maxPrice: max}));
    }, [setFilters])

    const handleChangeRating = useCallback((rating) => {
        setFilters((prev) => ({...prev, minRating: rating}));
    }, [setFilters]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Filters</h2>

            <div className={styles.line} />

            <CategoryFilter 
                categories={CATEGORIES}
                selected={filters.category}
                onChange={handleChangeCategory}
            />

            <div className={styles.line} />

            <PriceFilter 
                min={filters.minPrice}
                max={filters.maxPrice}
                onChange={handleChangePrice}
            />

            <div className={styles.line} />

            <RatingFilter 
                value={filters.minRating}
                onChange={handleChangeRating}
            />
        </div>
    )
}
