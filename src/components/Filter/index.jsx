import React from 'react'
import styles from "./Filter.module.scss";
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';

export default function Filter({ filters, setFilters }) {
    const categories = [
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics",
    ]

    const handleChangeCategory = (categories) => {
        setFilters((prev) => ({...prev, category: categories}));
    };

    const handleChangePrice = (min, max) => {
        setFilters((prev) => ({...prev, minPrice: min, maxPrice: max}));
    }

    const handleChangeRating = (rating) => {
        setFilters((prev) => ({...prev, minRating: rating}));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Filters</h2>

            <CategoryFilter 
                categories={categories}
                selected={filters.category}
                onChange={handleChangeCategory}
            />

            <PriceFilter 
                min={filters.minPrice}
                max={filters.maxPrice}
                onChange={handleChangePrice}
            />

            <RatingFilter 
                value={filters.minRating}
                onChange={handleChangeRating}
            />
        </div>
    )
}
