import React from 'react'

export default function Sort({ sorts, setSorts }) {
    const handleChange = (e) => {
        const [criteria, direction] = e.target.value.split("-");

        setSorts((prev) => (
            prev.map((sort, i) => (
                sort.criteria === criteria ? {...sort, direction, enabled: true} : sort
            ))
        ))
    }

    return (
        <div>
            <select
                value={`${sorts[0].criteria}-${sorts[0].direction}`}
                onChange={handleChange}
            >
                <option value="title-asc">Title A-Z</option>
                <option value="title-desc">Title Z-A</option>
            </select>
            <select
                value={`${sorts[1].criteria}-${sorts[1].direction}`}
                onChange={handleChange}
            >
                <option value="price-asc">Price Low-High</option>
                <option value="price-desc">Price High-Low</option>
            </select>
        </div>
    )
}
