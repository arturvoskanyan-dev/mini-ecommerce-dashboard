import React, { useState } from 'react'

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

        setLocalMin(value > localMax ? localMax : value)
    }

    const handleChangeMaxPrice = (e) => {
        const value = +e.target.value;

        setLocalMax(value < localMin ? localMin : value)
    }

    return (
        <div>
            <div>
                <h3>Categories</h3>
                <div>
                    {
                        categories.map((category) => (
                            <label key={category}>
                                <input
                                    type='checkbox'
                                    value={category}
                                    checked={filters.category.includes(category)}
                                    onChange={handleChangeCategory}
                                />
                                {category}
                            </label>
                        ))
                    }
                </div>
            </div>
            <div>
                <h3>Price</h3>
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
    )
}
