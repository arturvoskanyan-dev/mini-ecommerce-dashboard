import React, { useEffect, useState } from 'react'

export default function Search({filters, setFilters}) {
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
        <input
            type='text'
            value={query}
            onChange={handleChange}
            placeholder='Search...'
        />
    )
}
