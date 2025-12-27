import React from 'react'

export default function Filter({filters, setFilters}) {
    const categories = [
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics",
    ]

    const handleChangeCategory = (e) => {
        const {value, checked} = e.target;

        setFilters((prev) => {
            let newCategories = [...prev.category];

            if(checked) {
                // add category
                newCategories.push(value);
            } else {
                // remove category
                newCategories = newCategories.filter((category) => category !== value);
            }

            return {...prev, category: newCategories};
        })
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
        </div>
    )
}
