import React from 'react'

export default function Option({value, label, prefix}) {
    return (
        <option value={prefix ? `${prefix}-${value}` : value}>
            {label}
        </option>
    )
}