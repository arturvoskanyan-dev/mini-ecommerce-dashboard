import React, { useState } from 'react'
import styles from "./Filter.module.scss";

export default function Filter({ filters, setFilters }) {
    const [localMin, setLocalMin] = useState(filters.minPrice);
    const [localMax, setLocalMax] = useState(filters.maxPrice);

    const categories = [
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics",
    ]

    const handleChangeCategory = (e) => {
        const { value, checked } = e.target;

        setFilters((prev) => {
            let newCategories = [...prev.category];

            if (checked) {
                // add category
                newCategories.push(value);
            } else {
                // remove category
                newCategories = newCategories.filter((category) => category !== value);
            }

            return { ...prev, category: newCategories };
        })
    }

    // update filters only on mouse release to avoid unnecessary re-renders
    const handleMouseUp = () => {
        setFilters((prev) => ({
            ...prev,
            minPrice: localMin,
            maxPrice: localMax
        }))
    }

    const handleChangeMinPrice = (e) => {
        const value = +e.target.value;

        if(/^\d*$/.test(value)) {
            setLocalMin(value > localMax ? localMax : value)
        }
    }

    const handleChangeMaxPrice = (e) => {
        const value = +e.target.value;

        if(/^\d*$/.test(value)) {
            setLocalMax(value < localMin ? localMin : value)
        }
    }

    const handleChangeRating = (e) => {
        setFilters((prev) => ({
            ...prev,
            minRating: +e.target.value
        }))
    }

    console.log(localMax);


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Filters</h2>
            {/* <div></div> */}
            <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>Categories</h3>
                <div className={styles.categoryContainer}>
                    {
                        categories.map((category) => (
                            <label className={styles.categoryLabel} key={category}>
                                <input
                                    type='checkbox'
                                    value={category}
                                    checked={filters.category.includes(category)}
                                    onChange={handleChangeCategory}
                                    className={styles.checkbox}
                                />
                                {category}
                            </label>
                        ))
                    }
                </div>
            </div>
            <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>Price</h3>
                <div>
                    <div className={styles.priceContent}>
                        <div className={styles.priceInfo}>
                            <span>From</span>
                            <input
                                type='text'
                                value={localMin}
                                onChange={handleChangeMinPrice}
                                onBlur={handleMouseUp}
                                // placeholder={localMin}
                                className={styles.priceInput}
                            />
                        </div>
                        <div className={styles.priceInfo}>
                            <span>To</span>
                            <input
                                type='text'
                                value={localMax}
                                onChange={handleChangeMaxPrice}
                                onBlur={handleMouseUp}
                                className={styles.priceInput}
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            value={localMin}
                            onChange={handleChangeMinPrice}
                            onMouseUp={handleMouseUp}
                        />

                        <input
                            type="range"
                            min={0}
                            max={1000}
                            value={localMax}
                            onChange={handleChangeMaxPrice}
                            onMouseUp={handleMouseUp}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.sectionContainer}>
                <h3 className={styles.sectionTitle}>Rating</h3>
                <div className={styles.ratingContent}>
                    <label className={styles.ratingLabel} htmlFor='ratingFilter'>Minimum rating</label>
                    <select
                        id='ratingFilter'
                        value={filters.minRating}
                        onChange={handleChangeRating}
                    >
                        <option value={0}>All</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
